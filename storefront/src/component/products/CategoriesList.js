import { connect } from 'react-redux';
import { updateCategory, reset } from '../../store/Categories'

function categoriesList({ categories, activeCategory, updateCategory, reset, active }) {
console.log('HERE', activeCategory)
  return (
    <div>
      {categories.map(category => (
        <button key={category.id} onClick={() => updateCategory(category)}>{category.dispName}</button>
        ))}
        {active ?
        <button onClick={() => reset()}>RESET</button> : null
        }
    </div>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    active: categories.active
  }
}

const mapDispatchToProps = {
 updateCategory,
 reset
}

export default connect(mapStateToProps, mapDispatchToProps)(categoriesList)