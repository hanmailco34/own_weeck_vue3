<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productList: [
                {
                    "product_name":"기계식키보드1",
                    "price":25000,
                    "category":"노트북/태블릿",
                    "delivery_price":5000
                },
                {
                    "product_name":"기계식키보드2",
                    "price":25000,
                    "category":"노트북/태블릿",
                    "delivery_price":5000
                },
                {
                    "product_name":"기계식키보드3",
                    "price":25000,
                    "category":"노트북/태블릿",
                    "delivery_price":5000
                },
                {
                    "product_name":"기계식키보드4",
                    "price":25000,
                    "category":"노트북/태블릿",
                    "delivery_price":5000
                },
                {
                    "product_name":"기계식키보드5",
                    "price":25000,
                    "category":"노트북/태블릿",
                    "delivery_price":5000
                },
            ]
        };
    }
};
</script>

<style>

</style>