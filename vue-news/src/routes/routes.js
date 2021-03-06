import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
export default [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: `news`,
        component: NewsView,
    },
    {
        path: '/jobs',
        name: `jobs`,
        component: JobsView,
    },
    {
        path: '/ask',
        name: `ask`,
        component: AskView,
    },
    {
        path: '/item',
        component: ItemView,
    },
    {
        path: '/user/:userId',
        component: UserView,
    },
    {
        path: '/item/:contentId',
        component: ItemView,
    },
]