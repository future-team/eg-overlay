/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
require ('../css/Overlay.less');

export default class Overlay extends Component{
    static propTypes = {
        //overlay的位置，可选top、bottom、left、right、top-left、top-right、bottom-left、bottom-right。默认bottom-right
        position:PropTypes.string,
        //何时显示遮罩块，可选always、hover（always会一直显示，hover只有在鼠标移动到的时候会显示）默认always
        show:PropTypes.string,
        //overlay的内容
        overlayContent:React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.element
        ])

    };

    static defaultProps = {
        position:'bottom-right',
        show:'always'
    };

    render(){
        return(<a className='eg-overlay-container'>
            {this.props.children}
            <div className={'eg-overlay '+this.props.position+' '+this.props.show}>
                {
                    this.props.overlayContent
                }
            </div>
        </a>)
    }
}

