# eg-overlay

遮罩块：鼠标移动到某个元素的时候显示一条遮罩。
```jsx
  <Overlay
        overlayContent={
        <div style={{color:'#fff',fontSize:'12px'}}>
            <span style={{marginRight:'20px'}}>删除</span>
            <span>编辑</span>
        </div>
        }
        position='top-right'>
        <div style={{width:'200px',height:'200px',background:'red'}}>
            这里是内容区域
        </div>
  </Overlay>
```
```jsx
  <Overlay
        overlayList={
            [{
                content:'预览',
                callback:function(){
                    alert('view');
                }
              },{
                content:'删除',
                callback:function(){
                    alert('delete');
                }
              },{
                content:'编辑',
                callback:function() {
                    alert('edit')
                }
              }]
        }
        position='top'>
        <div style={{width:'200px',height:'200px',background:'red'}}>
            这里是内容区域
        </div>
  </Overlay>
```

#### `<Overlay>` Props:
- overlayContent  overlay的内容，也就是遮罩条中的内容 
- overlayList  和overlayContent不应该同时存在，和overlayContent的区别在于用数组的形式配置内容，
并且提默认样式。数组中的每个item结构为{item:'',callback:function(){}},item既可以为string，也可以为react元素
- position  overlay的位置，可选top、bottom、left、right、top-left、top-right、bottom-left、bottom-right 默认bottom-right
- show  何时显示遮罩条，可选always、hover（always会一直显示，hover只有在鼠标移动到的时候会显示）默认always
- children（子元素） 遮罩条依附的元素.



### Contributing

- Fork the project
- Run the project in development view demo: `$ npm run demo`
- Make changes.
- Add appropriate tests
- `$ npm run test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Rnn build
- `$ npm run build`
- Commit and PR.


