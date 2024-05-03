<template>
    <render>
        
    </render>
</template>

<script lang="ts" setup>
import { ref, reactive, h, resolveComponent } from "vue";
const props = withDefaults(
    defineProps<{
        icon: string;
        size: number
    }>(),
    {
        size: 16,
        icon: 'Edit'
    }
)
const render = () => {
    if (props.icon) {
        return h(resolveComponent('el-icon'),
            {
                size: props.size
            },
            () => h(resolveComponent(props.icon))
        )
    }else{
        return h('i')
    }

}
</script>

<style lang="scss" scoped></style>