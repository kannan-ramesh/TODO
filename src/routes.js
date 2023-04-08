import Habit from '../src/components/Habit/Habit.svelte';
import HabitAdd from '../src/components/Habit/HabitAdd.svelte';
import NotFound from '../src/NotFound.svelte';
import HabitShow from './components/Habit/HabitShow.svelte';
import Home from '../src/Home.svelte';
import TodoAdd from '../src/components/todo/TodoAdd.svelte';
import App from '../src/App.svelte';

export default{
    '/':Home,
    '/home':Home,
    '/habitadd/':HabitAdd,
    '/todoadd/':TodoAdd,
    '*':NotFound
}
