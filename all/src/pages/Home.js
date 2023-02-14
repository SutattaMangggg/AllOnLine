import React, {useContext} from 'react';
//import product context
import {ProductContext} from '../contexts/ProductContext';
import Product from '../components/Product';


const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
//ตวามงาม
  const filteresProducts = products.filter(item => {
    return (
      item.category === "ความงาม" || item.category === "เครื่องใช้ไฟฟ้า" || item.category === "แม่และเด็ก ผู้สูงอายุ" || item.category === "ผลิตภัณฑ์สำหรับสัตว์เลี้ยง" 
      || item.category === "บ้านและสวน" || item.category === "เฟอร์นิเจอร์" || item.category === "สุขภาพและเครื่องกำลังกาย" || item.category === "ห้องนอนและเครื่องนอน"
      || item.category === "เครื่องมือช่างและฮาร์ดแวร์" || item.category === "สวนและอุปกรณ์ตกแต่งภายนอก" || item.category === "โคมไฟและหลอดไฟ" || item.category === "ของใช้ภายในบ้าน"
      || item.category === "ผลิตภัณฑ์สำหรับสัตว์เลี้ยง" || item.category === "ซูเปอร์มาร์เก็ต" || item.category === "แฟชั่น"
    );
  });
  console.log(filteresProducts);
  return <div>
    
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 xl:grid-col-5 gap-[30px] max-w-sm mx-auto
        md:max-w-none md:mx-0'>
          {filteresProducts.map(product => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
