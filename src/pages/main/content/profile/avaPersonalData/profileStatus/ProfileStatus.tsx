import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './ProfileStatus.module.scss';


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

/*
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
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div className={style.statusContainer}>

                {!this.state.editMode &&
                <div className={style.statusBlock}>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || 'no user status'}</span>
                </div>}

                {this.state.editMode &&
                    <div className={style.inputStatusBlock}>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>}

            </div>
        );
    };
}
*/


const ProfileStatus = (props: PropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)


    useEffect( ()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={style.statusContainer}>

        {!editMode &&
        <div className={style.statusBlock}>
            <span onDoubleClick={activateEditMode}>{props.status || 'no user status'}</span>
        </div>}

        {editMode &&
        <div className={style.inputStatusBlock}>
            <input autoFocus={true}
                   onBlur={deactivateEditMode}
                   value={status}
                   onChange={onStatusChange}
            />
        </div>}

    </div>
}

export default ProfileStatus;
