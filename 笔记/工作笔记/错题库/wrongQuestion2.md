### el-checkbox-group报错：

`TypeError: Cannot read properties of undefined (reading 'length')`：v-model值是数组，对象不能被改变

### el-upload获取请求头：

```js
  headers:{
        Authorization:this.$store.getters.access_token
      },
```

### 防抖函数

```js
data() {
            timeout: null
        }, 
method: {
            change() {
                if(this.timeout){
                    clearTimeout(this.timeout)
                }
                this.timeout = setTimeout(() => {
                    console.log("Anti shake successful")
                }, 500);
            }
        }
```

### elementUI 表格 prop属性 如何通过判断转换值

```js
    <el-table-column prop="questionnaireState" label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.questionnaireState == 0">未发布</span>
          <span v-if="scope.row.questionnaireState == 1">收集中</span>
          <span v-if="scope.row.questionnaireState == 2">已撤销</span>
          <span v-if="scope.row.questionnaireState == 3">已结束</span>
        </template>
      </el-table-column>
```

