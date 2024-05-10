// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const classNameHighlight = isActive ? 'tab-button active' : 'tab-button'

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={classNameHighlight}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
