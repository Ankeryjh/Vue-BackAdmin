<template>
    <div>
        <el-button type="primary" @click="dialogVisible = true">+ 新增用户</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
        <el-dialog title="添加用户" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px" :inline="true">
                <el-form-item label="姓名" prop='name'>
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop='age'>
                    <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop='sex'>
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth">
                    <el-date-picker v-model="form.birth" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop='addr'>
                    <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: '',
            },
            tableData:[],
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入名称',
                        tirgger: 'blur',
                    }
                ],
                age: [
                    {
                        required: true,
                        message: '请输入年龄',
                        tirgger: 'blur',
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: '请选择性别',
                        tigger: 'blur',
                    }
                ],
                birth: [
                    {
                        required: true,
                        message: '请选择出生日期',

                    }
                ],

                addr: [
                    {
                        required: true,
                        message: '请填写地址',
                        tigger: 'blur',
                    }
                ]
            }
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });


        },
      
    }
};
</script>
<style></style>