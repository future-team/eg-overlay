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
                    overlayList={
                        [{
                            content:'删除',
                            callback:function(){
                                alert('delete');
                            }
                        },{
                            content:'编辑',
                            callback:function() {
                              alert('edit')
                            }
                        }
                        ]
                    }
                    position='top-right'>
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