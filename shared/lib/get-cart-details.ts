import { CartDTO } from "../services/dto/cart.dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";
interface returnProps{
    items: CartStateItem[],
    totalAmount: number,
}
export type CartStateItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    disabled?: boolean;
    pizzaSize?: number | null;
    pizzaType?: number | null;
    ingredients: Array<{ name: string; price: number }>;
  };
export const getCartDetails = (data: CartDTO): returnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.size,
        pizzaType: item.productItem.pizzaType,
        ingredients: item.ingredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price,
        }))
    }))
    return {items, totalAmount: data.totalAmount}
}