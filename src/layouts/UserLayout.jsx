import PropTypes from 'prop-types'

import Sidebar from '@/components/common/Sidebar'
import Header from '@/components/common/Header'

const UserLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserLayout
