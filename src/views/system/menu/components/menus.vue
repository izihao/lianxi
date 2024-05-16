<template>
    <el-drawer v-model="drawer" :title="Drawer.title" direction="rtl" size="650px" :before-close="handleClose">
        <el-form :model="formData">
            <el-form-item label="上级菜单">
                <el-cascader :options="options" :props="props1" clearable />
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="formData.type">
                    <el-radio value="1" border>菜单</el-radio>
                    <el-radio value="2" border>按钮</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单名称">
                <el-input v-model="formData.name" maxlength="10" placeholder="请输入菜单名称" show-word-limit type="text">
                </el-input>
            </el-form-item>
            <el-form-item label="权限标识">
                <el-input v-model="formData.code" maxlength="10" placeholder="请输入权限标识" show-word-limit type="text">
                </el-input>
            </el-form-item>
            <el-form-item label="路由地址">
                <el-input v-model="formData.path" maxlength="200" placeholder="请输入路由地址" show-word-limit type="text">
                </el-input>
            </el-form-item>
            <el-form-item label="路由名称">
                <el-input v-model="formData.path" maxlength="50" placeholder="请输入路由名称" show-word-limit type="text">
                </el-input>
            </el-form-item>
            <el-form-item label="组件路径">
                <el-input v-model="formData.path" maxlength="390" placeholder="路由组件相对路径" show-word-limit type="text">
                </el-input>
            </el-form-item>
            <el-form-item label="菜单图标">
                <el-input v-model="formData.path" maxlength="100" placeholder="请输入图标名ele-开头" show-word-limit
                    type="text">
                </el-input>
            </el-form-item>
            <el-form-item label="重定向">
                <el-input v-model="formData.path" maxlength="200" placeholder="路由重定向地址redirect值" show-word-limit
                    type="text">
                </el-input>
            </el-form-item>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="是否隐藏">
                        <el-radio-group v-model="formData.hidden" class="ml-4">
                            <el-radio value="1" size="large">不隐藏</el-radio>
                            <el-radio value="2" size="large">隐藏</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否缓存">
                        <el-radio-group v-model="formData.cache" class="ml-4">
                            <el-radio value="1" size="large">不缓存</el-radio>
                            <el-radio value="2" size="large">缓存</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="排序">
                <el-input-number style="width: 300px;" v-model="formData.sort" :min="1" :max="100000" />
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="formData.remark" type="textarea" maxlength="50" show-word-limit
                    placeholder="请输入备注" />
            </el-form-item>
        </el-form>
        <template #footer>
            <el-row justify="center">
                <el-button>取消</el-button>
                <el-button type="primary">保存</el-button>
            </el-row>
        </template>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const drawer = ref(true)
const handleClose = () => {
    drawer.value = false
}

const Drawer = reactive({
    title: '新增菜单'
})
defineOptions({
    name: 'menus'
})
const formData = ref({
    type: '1',
    name: '',
    path: '',
    hidden: '1',
    cache: '',
    sort: '1',
    remark: ''
})
const props1 = {
    checkStrictly: true,
}
const options = [
    { 
        value: 'guide',
        label: 'Guide',
        children: [
            {
                value: 'disciplines',
                label: 'Disciplines',
                children: [
                    {
                        value: 'consistency',
                        label: 'Consistency',
                    },
                    {
                        value: 'feedback',
                        label: 'Feedback',
                    },
                    {
                        value: 'efficiency',
                        label: 'Efficiency',
                    },
                    {
                        value: 'controllability',
                        label: 'Controllability',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'side nav',
                        label: 'Side Navigation',
                    },
                    {
                        value: 'top nav',
                        label: 'Top Navigation',
                    },
                ],
            },
        ],
    },
    {
        value: 'component',
        label: 'Component',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout',
                    },
                    {
                        value: 'color',
                        label: 'Color',
                    },
                    {
                        value: 'typography',
                        label: 'Typography',
                    },
                    {
                        value: 'icon',
                        label: 'Icon',
                    },
                    {
                        value: 'button',
                        label: 'Button',
                    },
                ],
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio',
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox',
                    },
                    {
                        value: 'input',
                        label: 'Input',
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber',
                    },
                    {
                        value: 'select',
                        label: 'Select',
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader',
                    },
                    {
                        value: 'switch',
                        label: 'Switch',
                    },
                    {
                        value: 'slider',
                        label: 'Slider',
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker',
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker',
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker',
                    },
                    {
                        value: 'upload',
                        label: 'Upload',
                    },
                    {
                        value: 'rate',
                        label: 'Rate',
                    },
                    {
                        value: 'form',
                        label: 'Form',
                    },
                ],
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table',
                    },
                    {
                        value: 'tag',
                        label: 'Tag',
                    },
                    {
                        value: 'progress',
                        label: 'Progress',
                    },
                    {
                        value: 'tree',
                        label: 'Tree',
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination',
                    },
                    {
                        value: 'badge',
                        label: 'Badge',
                    },
                ],
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert',
                    },
                    {
                        value: 'loading',
                        label: 'Loading',
                    },
                    {
                        value: 'message',
                        label: 'Message',
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox',
                    },
                    {
                        value: 'notification',
                        label: 'Notification',
                    },
                ],
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'Menu',
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs',
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb',
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown',
                    },
                    {
                        value: 'steps',
                        label: 'Steps',
                    },
                ],
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog',
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip',
                    },
                    {
                        value: 'popover',
                        label: 'Popover',
                    },
                    {
                        value: 'card',
                        label: 'Card',
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel',
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse',
                    },
                ],
            },
        ],
    },
    {
        value: 'resource',
        label: 'Resource',
        children: [
            {
                value: 'axure',
                label: 'Axure Components',
            },
            {
                value: 'sketch',
                label: 'Sketch Templates',
            },
            {
                value: 'docs',
                label: 'Design Documentation',
            },
        ],
    },
]


</script>

<style lang="scss" scoped></style>