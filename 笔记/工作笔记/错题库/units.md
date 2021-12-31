##### 获取前一个月当前日期

```js
 getLastMonth() {
      let date = new Date();
      date.setMonth(date.getMonth()-1);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      return `${y}-${m}`;
    },
```

##### 生成15位随机数

```js
function rando(m) {
            var num = '';
            for (var i = 0; i < m; i++) {
                var val = parseInt(Math.random() * 10, 10);
                if (i === 0 && val === 0) {
                    i--;
                    continue;
                }
                num += val;
            }
            return num;
        }

```

