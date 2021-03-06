//老板主界面
import React from 'react'
import { connect } from 'react-redux'
import {getUserList} from '../../redux/actions'
import UserList from '../../components/user-list/user-list'

class Dashen extends React.Component {
    componentDidMount() {
        this.props.getUserList('laoban')
    }
    render() {
        return(
            <UserList userList={this.props.userList}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        userList: state.userList
    }
}
export default connect(mapStateToProps, {getUserList})(Dashen)