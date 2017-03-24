import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import Overlay from '../../src/Overlay.js';
class Demo extends Component{

    constructor(props,context){
        super(props,context);
    }

    render(){
        return (
            <div>
                <Overlay
                    overlayContent={
                        <div style={{color:'#fff',fontSize:'12px'}}>
                            <span style={{marginRight:'20px'}}>删除</span>
                            <span>编辑</span>
                        </div>
                    }
                    position='top-right'
                    show='hover'>
                    <div style={{width:'200px',height:'200px',background:'red'}}>
                        这里是内容区域
                    </div>
                </Overlay>
            </div>
        )
    }
}



ReactDom.render(
    <Demo></Demo>,
    document.getElementById('root')
);