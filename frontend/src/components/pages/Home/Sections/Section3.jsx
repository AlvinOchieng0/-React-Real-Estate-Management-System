import styles from "./Section3.module.scss";
import { ArrowButton } from "../../../Buttons/Buttons";
import Carousel from "../../../Carousel/Carousel";

import { SwiperSlide } from "swiper/react";
import Card from "../../../Card/Card";
import { useQuery,gql } from "@apollo/client";

const CARD_DATA = gql`
  query GET_CARDS {
    houses(
      filters: { categories: { Category: { contains: "Buy" } } }
      pagination: { limit: 6 }
    ) {
      data {
        attributes {
          location {
            data {
              attributes {
                City
              }
            }
          }
          Preview_Image {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                Category
              }
            }
          }
          Neighbourhood
          Street
          Rooms
          Bedrooms
          Bathrooms
          Short_Andress
          Price
        }
      }
    }
  }
`;

 const Section3 = () => {
   const {loading, data, error} = useQuery(CARD_DATA);
  return (
     <section className={styles.section_3}>
        <div className={styles.section_3_title}>
           <h1>Best Houses</h1> 
           <ArrowButton text="See more" path="buy"/>
         </div>

         {/* CARDS / CAROUSEL*/}
         <div className={styles.cards}>
            <Carousel>
         {loading || error ? (
            <>
            <SwiperSlide>
               <Card />      
            </SwiperSlide>
            </>
         ) : (
           <>{data.houses.data.map((house,index)=>(
            <SwiperSlide key={index}>
              <Card
              info={{
                category: "Buy",
                imageSource: `http://localhost:1337${house.attributes.Preview_Image.data.attributes.url}`,
                city: `${house.attributes.location.data.attributes.City}`,
                neighbourhood: `${house.attributes.Neighbourhood}`,
                street: `${house.attributes.Street}`,
                rooms: `${house.attributes.Rooms}`,
                bedrooms: `${house.attributes.Bedrooms}`,
                bathrooms: `${house.attributes.Bathrooms}`,
                shortAndress: `${house.attributes.Short_Andress}`,
                price: `${house.attributes.Price}`,
              }}
              />
            </SwiperSlide>
           ))}</>
         )}
            </Carousel>
         </div>
     </section>
  );
};

export default Section3;
