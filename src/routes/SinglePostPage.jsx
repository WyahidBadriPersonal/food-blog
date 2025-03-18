import React from "react";
import Image from "../components/Image";
import { Link } from "react-router";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { FaStar, FaStarHalf } from "react-icons/fa";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quae
            in doloremque id eius laudantium.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Rated</span>
            <span className="text-yellow-400 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </span>
            <span>Written By</span>
            <span>·</span>
            <Link className="text-blue-700">Dinner</Link>
            <span>3 hours ago</span>
          </div>
          <p className="font-medium text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            numquam consequuntur fugit natus harum at impedit praesentium alias
            vitae voluptate, cumque, pariatur soluta, aspernatur dolorum esse
            inventore atque quisquam porro.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="stock" alt="stock" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-12 md:flex-row">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
            deleniti laudantium saepe ipsa, laboriosam quam dolores voluptatem!
            Quaerat nostrum numquam autem beatae possimus. Cumque magni vitae
            quam nobis, voluptas libero perspiciatis accusamus illum sunt
            nostrum quos iste aut saepe eos nesciunt recusandae neque laborum et
            aliquam? Facilis nulla vitae molestiae. Qui architecto quibusdam
            rerum hic dolore natus quos adipisci perferendis quod. Nobis in,
            molestias ex eos nihil laudantium nesciunt libero voluptatem
            similique cumque totam commodi tempora vitae corrupti labore ut
            autem nostrum architecto suscipit. Rerum perspiciatis sequi alias,
            inventore, nostrum voluptatem earum perferendis eum laboriosam
            veniam, cupiditate quaerat voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
            deleniti laudantium saepe ipsa, laboriosam quam dolores voluptatem!
            Quaerat nostrum numquam autem beatae possimus. Cumque magni vitae
            quam nobis, voluptas libero perspiciatis accusamus illum sunt
            nostrum quos iste aut saepe eos nesciunt recusandae neque laborum et
            aliquam? Facilis nulla vitae molestiae. Qui architecto quibusdam
            rerum hic dolore natus quos adipisci perferendis quod. Nobis in,
            molestias ex eos nihil laudantium nesciunt libero voluptatem
            similique cumque totam commodi tempora vitae corrupti labore ut
            autem nostrum architecto suscipit. Rerum perspiciatis sequi alias,
            inventore, nostrum voluptatem earum perferendis eum laboriosam
            veniam, cupiditate quaerat voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
            deleniti laudantium saepe ipsa, laboriosam quam dolores voluptatem!
            Quaerat nostrum numquam autem beatae possimus. Cumque magni vitae
            quam nobis, voluptas libero perspiciatis accusamus illum sunt
            nostrum quos iste aut saepe eos nesciunt recusandae neque laborum et
            aliquam? Facilis nulla vitae molestiae. Qui architecto quibusdam
            rerum hic dolore natus quos adipisci perferendis quod. Nobis in,
            molestias ex eos nihil laudantium nesciunt libero voluptatem
            similique cumque totam commodi tempora vitae corrupti labore ut
            autem nostrum architecto suscipit. Rerum perspiciatis sequi alias,
            inventore, nostrum voluptatem earum perferendis eum laboriosam
            veniam, cupiditate quaerat voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
            deleniti laudantium saepe ipsa, laboriosam quam dolores voluptatem!
            Quaerat nostrum numquam autem beatae possimus. Cumque magni vitae
            quam nobis, voluptas libero perspiciatis accusamus illum sunt
            nostrum quos iste aut saepe eos nesciunt recusandae neque laborum et
            aliquam? Facilis nulla vitae molestiae. Qui architecto quibusdam
            rerum hic dolore natus quos adipisci perferendis quod. Nobis in,
            molestias ex eos nihil laudantium nesciunt libero voluptatem
            similique cumque totam commodi tempora vitae corrupti labore ut
            autem nostrum architecto suscipit. Rerum perspiciatis sequi alias,
            inventore, nostrum voluptatem earum perferendis eum laboriosam
            veniam, cupiditate quaerat voluptatibus.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-small font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="arthur.png"
                alt="arthur"
                className="rounded-full w-12 h-12 object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-500">Arthur Read</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <FaTiktok />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-small font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm ">
            <Link className="underline hover:text-blue-500" to="/posts">
              All
            </Link>
            <Link className="underline hover:text-blue-500" to="/posts?cat=breakfast">
              Breakfast
            </Link>
            <Link className="underline hover:text-blue-500" to="/posts?cat=brunch">
              Brunch
            </Link>
            <Link className="underline hover:text-blue-500" to="/posts?cat=lunch">
              Lunch
            </Link>
            <Link className="underline hover:text-blue-500" to="/posts?cat=dinner">
              Dinner
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-small font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
