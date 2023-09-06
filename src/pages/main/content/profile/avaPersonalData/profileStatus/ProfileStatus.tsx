import React, {ChangeEvent} from 'react';
import style from './ProfileStatus.module.scss';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {

        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }

    render() {
        return (
            <div className={style.statusContainer}>

                {!this.state.editMode &&
                <div className={style.statusBlock}>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || 'no user status'}</span>
                </div>
                }

                {this.state.editMode &&
                <div className={style.inputAndButtonBlock}>
                    <div className={style.inputStatusBlock}>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>

                    {/*<div className={style.profileStatusContainer}>
                        <button>Submit</button>
                    </div>*/}
                </div>
                }
            </div>
        );
    };
}


export default ProfileStatus;