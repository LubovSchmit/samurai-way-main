import React from 'react';
import style from './ProfileStatus.module.scss';


type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEdtMode = () => {
        this.setState({editMode: true})
        this.state.editMode = true
    }

    deActivateEdtMode = () => {
        this.setState({editMode: false})
        this.state.editMode = false
    }


    render() {
        return (
            <div className={style.statusContainer}>

                {!this.state.editMode &&
                <div className={style.statusBlock}>
                    <span onDoubleClick={this.activateEdtMode}>{this.props.status}</span>
                </div>
                }

                {this.state.editMode &&
                <div className={style.inputAndButtonBlock}>
                    <div className={style.inputStatusBlock}>
                        <input autoFocus={true} onBlur={this.deActivateEdtMode} value={this.props.status}/>
                    </div>

                    <div className={style.profileStatusContainer}>
                        <button>Submit</button>
                    </div>
                </div>


                }


            </div>
        );
    };
}


export default ProfileStatus;