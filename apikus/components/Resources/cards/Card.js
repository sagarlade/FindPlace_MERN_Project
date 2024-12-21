// import Link from "next/link";
// import Styles from "../Products/Product.module.css"
// const Card = ({ img, title, header, linkToDocument }) => {
//   return (
//     <>
//       <section className={Styles.card}>
//         <div className={Styles.card_details}>
//           <h3 className={Styles.card_title}>{title}</h3>
//         </div>
//         <section className={Styles.card_heade}>
//           <Link
//             href="#"
//             target="_blank" rel="noopener noreferrer"
//             className={Styles.navbar_brand}
//             activeClassName="active"
//           >
//             <h3 className={Styles.card_header}>{header}</h3>
//           </Link>
//         </section>
//         <img src={img} alt={title} className={Styles.card_img} />
//       </section>
//     </>
//   );
// };

// export default Card;
import Link from "next/link";
import Styles from "../Products/Product.module.css";

const Card = ({ img, title, header, linkToDocument }) => {
  return (
    <section className={Styles.card}>
      <div className={Styles.card_details}>
        <h3 className={Styles.card_title}>{title}</h3>
      </div>
      <section className={Styles.card_header}>
        {linkToDocument ? (
          <Link
            href={linkToDocument}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.navbar_brand}
          >
            <h3 className={Styles.card_header}>{header}</h3>
          </Link>
        ) : (
          <h3 className={Styles.card_header}>{header}</h3>
        )}
      </section>
      {img && <img src={img} alt={title} className={Styles.card_img} />}
    </section>
  );
};

export default Card;