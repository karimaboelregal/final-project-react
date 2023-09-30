import AdminLTE, { Sidebar } from 'adminlte-2-react';
import Users from './Users/Users';
import Products from './Products/Products';
const { Item } = Sidebar;


function Navbar() {
    var sidebar = [
        <Item key="users" text="Users" icon="fas-user" to='/users' />,
        <Item key="products" text="Products" icon="fas-shopping-cart" to='/products' />,
        <Item key="categories" text="Categories" icon="fas-scroll" to='/categories' />,
        <Item key="orders" text="Orders" icon="fas-list" to='/orders' />,
    ]

    return (
        <div style={{height: "100vh"}}>
            <AdminLTE title={["Admin"]} titleShort={["Admin"]} theme="green" sidebar={sidebar} homeTo='/users'>
                <Users path='/users' />
                <Products path="/products"/>
            </AdminLTE>
        </div>
    );
}


export default Navbar;