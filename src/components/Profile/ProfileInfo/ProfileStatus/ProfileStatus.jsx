import s from "./ProfileStatus.module.css";
import React, { Component } from 'react';

class ProfileStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusEditable: false,
            status: '',
        };
        this.editStatus = this.editStatus.bind(this);
        this.saveStatus = this.saveStatus.bind(this);
        this.statusInput = this.statusInput.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
      }

    componentDidMount() {
        this.setState({
            status: this.props.status,
        })
    }

    editStatus() {
        this.setState({
            statusEditable: true
        })
    }

    saveStatus() {
        this.setState({
            statusEditable: false
        })
        this.props.updateStatus(this.state.status);
    }

    statusInput(e) {
        let value = e.currentTarget.value;

        this.setState({
            status: value
        })
    }

    render() {
        return (
            <div className={s['status']}>
                {
                    !this.state.statusEditable || <input autoFocus={true} type="text" value={this.state.status} onBlur={this.saveStatus} onChange={this.statusInput} />
                }

                {
                    this.state.statusEditable || <p className={s.editable} onDoubleClick={this.editStatus}>{this.state.status || '-------------'}</p>
                }
            </div>
        );
    }
}

export default ProfileStatus;
