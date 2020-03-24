<template>
    <div class="product">
        <Header />
        <Productpage class="my-5"/>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header'
import Productpage from '../components/Productpage'
import Footer from '../components/Footer'
export default {
name: 'Products',
components: {
    Header,
    Productpage,
    Footer
}
}
</script>