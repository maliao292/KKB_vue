# 深度监视
-- dara:functuin(){
    return {
        myText:"111",
        stus:[{name:'jack'}]
    }
}
-- 深度监视 ： object || array
```
watch:{
  stus:function(){  
      // 监视不成功
  }  
  stus:{
      deep:true,
      handler:function(newV,oldV){
      // 监视成功
      }
  }
}
```

# slot 
-- 内置组件  插槽
-- 父组件传递的DOM结构
```
 <my-li>
 </my-li>
```
