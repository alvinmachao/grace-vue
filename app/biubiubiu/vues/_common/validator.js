import { SchemaModel, StringType, DateType, NumberType } from "schema-typed";

export const model = SchemaModel({
    acc: StringType().isRequired("用户名不能为空"),
    pass: StringType().isRequired("密码不能为空").minLength(6, "密码长度不能小于6位")
        .maxLength(20, '密码长度不能大于20位'),

});
