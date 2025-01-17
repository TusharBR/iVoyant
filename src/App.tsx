
import './App.css'
import Counter from './components/Counter'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
    <h1>React useState Examples</h1>
      <Counter/>
      <br />
      <hr />
      <hr />
      <TodoList/>
      <br />
      <hr />
      <hr />
      <Profile/>
      <hr />
      <hr />
      <ShoppingList/>
    </>
  )
}

export default App
