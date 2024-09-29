export type Plan = {
   id: number;
   image: string | null;
   name: string;
   placeType: placeType;
   location: string;
   
 };

export type placeType = 'Cafeteria' | 'Restaurante' | 'Atraccion' | 'Parque';

export type CartItem = {
  id: string;
  plan: Plan;
  plan_id: number;
  type: placeType;
  quantity: number;
};

// export const OrderStatusList: OrderStatus[] = [
//   'New',
//   'Cooking',
//   'Delivering',
//   'Delivered',
// ];

// export type OrderStatus = 'New' | 'Cooking' | 'Delivering' | 'Delivered';

// export type Order = {
//   id: number;
//   created_at: string;
//   total: number;
//   user_id: string;
//   status: OrderStatus;

//   order_items?: OrderItem[];
// };

// export type OrderItem = {
//   id: number;
//   product_id: number;
//   products: Plan;
//   order_id: number;
//   size: PizzaSize;
//   quantity: number;
// };

export type Profile = {
  id: string;
  group: string;
};