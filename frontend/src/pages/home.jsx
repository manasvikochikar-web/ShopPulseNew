import { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X, 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Headphones,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

// Sample Data
const CATEGORIES = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876?auto=format&fit=crop&w=400&q=80' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80' },
  { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=400&q=80' },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: '$299.99',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Minimalist Leather Smartwatch',
    category: 'Electronics',
    price: '$199.99',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Ergonomic Premium Backpack',
    category: 'Fashion',
    price: '$89.99',
    rating: 4.9,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    tag: 'Sale'
  },
  {
    id: 4,
    name: 'Modern Ceramic Planter Set',
    category: 'Home & Living',
    price: '$45.00',
    rating: 4.7,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80'
  }
];

const FEATURES = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },

  { icon: ShieldCheck, title: 'Secure Payment', desc: '100% protected checkout' },

  { icon: RotateCcw, title: 'Easy Returns', desc: '30-day money back guarantee' },

  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated customer service' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <div>
      {/* 1. Header & Navigation */}
      <header>
        <div>
          <div>
            
            {/* Logo */}
            <div>
              <div>
                <ShoppingBag />
              </div>
              <span>STORE.IO</span>
            </div>

            {/* Desktop Navigation */}
            <nav>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Categories</a>
              <a href="#">Deals</a>
              <a href="#">About</a>
            </nav>

            {/* Search Bar */}
            <div>
              <input 
                type="text" 
                placeholder="Search products..." 
              />
              <Search />
            </div>

            {/* Actions */}
            <div>
              <button>
                <Heart />
              </button>

              <button>
                <ShoppingBag />
                {cartCount > 0 && (
                  <span>
                    {cartCount}
                  </span>
                )}
              </button>

              <button>
                <User />
              </button>

              {/* Mobile menu button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <div>
              <div>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                />
                <Search />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80" 
            alt="Hero Banner" 
          />
        </div>
        <div>
          <div>
            <span>
              <TrendingUp /> New Season Arrival
            </span>
            <h1>
              Upgrade Your Everyday Essentials
            </h1>
            <p>
              Discover curated premium products designed for modern comfort and effortless style. Get up to 30% off this week.
            </p>
            <div>
              <a href="#products">
                Shop Now <ArrowRight />
              </a>
              <a href="#categories">
                Explore Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Propositions */}
      <section>
        <div>
          <div>
            {FEATURES.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div key={index}>
                  <div>
                    <Icon />
                  </div>
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section id="categories">
        <div>
          <div>
            <h2>Shop by Category</h2>
            <p>Explore our wide selection of popular categories</p>
          </div>
          <a href="#">
            View All Categories &rarr;
          </a>
        </div>

        <div>
          {CATEGORIES.map((cat, idx) => (
            <div key={idx}>
              <img 
                src={cat.image} 
                alt={cat.name} 
              />
              <div></div>
              <div>
                <h3>{cat.name}</h3>
                <span>Shop Now</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured Products */}
      <section id="products">
        <div>
          <div>
            <div>
              <h2>Featured Products</h2>
              <p>Our hand-picked selections just for you</p>
            </div>
            <a href="#">
              View All Products &rarr;
            </a>
          </div>

          <div>
            {FEATURED_PRODUCTS.map((prod) => (
              <div key={prod.id}>
                <div>
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                  />
                  {prod.tag && (
                    <span>
                      {prod.tag}
                    </span>
                  )}
                  <button>
                    <Heart />
                  </button>
                </div>

                <div>
                  <div>
                    <span>{prod.category}</span>
                    <h3>{prod.name}</h3>
                    
                    <div>
                      <Star />
                      <span>{prod.rating}</span>
                      <span>({prod.reviews})</span>
                    </div>
                  </div>

                  <div>
                    <span>{prod.price}</span>
                    <button onClick={() => setCartCount(c => c + 1)}>
                      <ShoppingBag /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Newsletter / CTA */}
      <section>
        <div> 
     
          <h2>Join Our Newsletter</h2>
          <p>
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
            />
            <button>
              Subscribe
            </button> 
          </form>
        </div>
      </section>
    </div>
  );
}