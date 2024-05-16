<template>
    <el-form :inline="true" :model="ApifoxModel" class="demo-form-inline">
        <el-form-item label="角色名称:">
            <el-input v-model="ApifoxModel.name" placeholder="请输入角色名称" clearable />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="userlist">
                <svg-icon icon="Search"></svg-icon>
                查询
            </el-button>
            <el-button type="success" @click="add">
                <svg-icon icon="plus"></svg-icon>
                新增角色
            </el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" />
        <el-table-column prop="roleName" label="角色名称" />
        <el-table-column prop="roleCode" label="角色编码" />
        <el-table-column prop="status" label="角色状态">
            <template #default="{ row }">
                <el-tag v-show="row.status == true" type="success">启用</el-tag>
                <el-tag v-show="row.status == false" type="warning">停用</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" />
        <el-table-column label="操作">
            <template #default="{ row }">
                <el-button link type="primary">
                    <svg-icon icon="Check"></svg-icon>
                    分配权限
                </el-button>
                <el-button link type="warning" @click="edit(row)">
                    <svg-icon icon="Edit"></svg-icon>
                    修改
                </el-button>
                <el-button link type="danger" @click="del(row)">
                    <svg-icon icon="Delete"></svg-icon>
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-row justify="end">
        <el-pagination v-model:current-page="ApifoxModel.current" v-model:page-size="ApifoxModel.size"
            :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="total"
            @size-change="userlist" @current-change="userlist" />
    </el-row>
    <el-dialog v-model="dialogVisible.dialog" :title="dialogVisible.title" width="500" :before-close="handleClose">
        <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
            class="demo-ruleForm" :size="formSize" status-icon>
            <el-form-item label="角色名称" prop="roleName">
                <el-input v-model="ruleForm.roleName" maxlength="30" show-word-limit placeholder="请输入角色名称" />
            </el-form-item>
            <el-form-item label="角色编码" prop="roleCode">
                <el-input v-model="ruleForm.roleCode" maxlength="30" show-word-limit placeholder="保证唯一性建议以`ROLE_`开头" />
            </el-form-item>
            <el-form-item label="角色状态" prop="status">
                <el-switch v-model="ruleForm.status" inline-prompt active-text="启" inactive-text="停" />
            </el-form-item>
            <el-form-item label="备注" prop="remark">
                <el-input v-model="ruleForm.remark" type="textarea" />
            </el-form-item>
            <el-row justify="center">
                <el-form-item>

                    <el-button @click="resetForm(ruleFormRef)">取消</el-button>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        保存
                    </el-button>

                </el-form-item>
            </el-row>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { getuserrole, adduser, putuser,deluser } from "@/api/system/userrole";
import type { ApifoxModel } from '@/api/types/userroletype'

const dialogVisible = reactive({
    dialog: false,
    title: '新增角色'
})
const ApifoxModel = reactive({
    current: 1,
    name: "",
    size: 10,
})
const tableData = ref<ApifoxModel[]>([])
const total = ref<number>()
const userlist = async () => {
    try {
        const res = await getuserrole(ApifoxModel)
        tableData.value = res.data.records
        total.value = res.data.total
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
userlist()

const add = () => {
    dialogVisible.dialog = true
}

import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

interface RuleForm {
    status: boolean
    roleName: string
    roleCode: string
    remark: string
    id?: number,
    createTime?: string
    updateTime?: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    status: false,
    roleName: '',
    roleCode: '',
    remark: '',
    id: 0,
    createTime: '',
    updateTime: ''
})


const rules = reactive<FormRules<RuleForm>>({
    roleName: [
        { required: true, message: '请输入角色名称', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            if (dialogVisible.title == '新增角色') {
                try {
                    const res = await adduser(ruleForm)
                    console.log(res);
                    ruleForm.status = false
                    ruleForm.roleName = ''
                    ruleForm.roleCode = ''
                    ruleForm.remark = ''
                    dialogVisible.dialog = false
                    userlist()
                } catch (error) {

                }
            } else if (dialogVisible.title == '编辑角色') {
                try {
                    const res = await putuser(ruleForm)
                    console.log(res);
                    ruleForm.status = false
                    ruleForm.roleName = ''
                    ruleForm.roleCode = ''
                    ruleForm.remark = ''
                    dialogVisible.dialog = false
                    userlist()
                } catch (error) {
                    console.log(error);
                }
            }
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const handleClose = () => {
    dialogVisible.dialog = false
    ruleForm.status = false
    ruleForm.roleName = ''
    ruleForm.roleCode = ''
    ruleForm.remark = ''
}
const edit = (row: any) => {
    console.log(row, 'row');
    dialogVisible.dialog = true
    dialogVisible.title = '编辑角色'
    ruleForm.status = row.status
    ruleForm.roleName = row.roleName
    ruleForm.roleCode = row.roleCode
    ruleForm.remark = row.remark
}
const del=async (row:any)=>{
    
    try {
        const res=await deluser({id:row.id})
        console.log(res);
        
    } catch (error) {
        
    }
}
</script>

<style lang="scss" scoped></style>