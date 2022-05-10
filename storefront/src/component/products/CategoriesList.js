import { connect } from 'react-redux';
import { active, inactive } from '../../store/Categories'

function categoriesList({ categories, active, inactive }) {
console.log(categories)
  return (
    <div>
      {categories.map(category => (
        <button key={category.id} onClick={() => active(category)}>{category.normalName}</button>
        ))}
        <button onClick={inactive}>RESET</button>
    </div>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = {
  active,
  inactive
}

export default connect(mapStateToProps, mapDispatchToProps)(categoriesList)