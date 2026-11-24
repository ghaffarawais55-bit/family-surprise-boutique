/* ==========================================================================
   AURA ROYAL COUTURE - APP.JS
   Interactive Products, Cart, Wishlist, Categories, & Gift Voucher Confetti
   Dedicated to Mom, Dad & Aunt | Crafted by Awais
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Product Data with PKR Prices and Custom SVG Icon Renderers
    const products = [
        {
            id: 1,
            title: "The Mom Imperial Emerald Sari",
            category: "festive",
            price: 68500,
            badge: "Mom's Pick",
            description: "Hand-woven pure chiffon sari adorned with antique zardozi embroidery and emerald crystal embellishments.",
            svgIcon: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 40C70 40 85 30 100 30C115 30 130 40 130 40L140 120C140 120 150 180 130 220C110 260 90 260 90 260H110C110 260 125 210 115 150L100 70L85 150C75 210 90 260 90 260H70C70 260 50 260 30 220C10 180 20 120 20 120L30 40H70Z" fill="url(#emeraldGrad)" stroke="#d4af37" stroke-width="2"/>
                <path d="M100 30L130 140L100 220L70 140L100 30Z" fill="#d4af37" fill-opacity="0.2" stroke="#d4af37" stroke-width="1.5"/>
                <circle cx="100" cy="80" r="12" fill="#d4af37"/>
                <circle cx="100" cy="130" r="8" fill="#d4af37"/>
                <defs>
                    <linearGradient id="emeraldGrad" x1="20" y1="30" x2="140" y2="260" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#06543b"/>
                        <stop offset="100%" stop-color="#022314"/>
                    </linearGradient>
                </defs>
            </svg>`
        },
        {
            id: 2,
            title: "Dad's Royal Velvet Sherwani",
            category: "mens",
            price: 95000,
            badge: "Dad's Choice",
            description: "Tailored British velvet in deep forest emerald with hand-embroidered gold bullion buttons and regal collar.",
            svgIcon: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 45L100 35L140 45L155 110L140 230H60L45 110L60 45Z" fill="url(#sherwaniGrad)" stroke="#d4af37" stroke-width="2"/>
                <path d="M100 35V230" stroke="#d4af37" stroke-width="2" stroke-dasharray="6 4"/>
                <rect x="92" y="70" width="16" height="120" rx="4" fill="#d4af37" fill-opacity="0.4"/>
                <defs>
                    <linearGradient id="sherwaniGrad" x1="45" y1="35" x2="155" y2="230" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#043927"/>
                        <stop offset="100%" stop-color="#022314"/>
                    </linearGradient>
                </defs>
            </svg>`
        },
        {
            id: 3,
            title: "Aunt's Kashmiri Pashmina Shawl",
            category: "shawls",
            price: 45000,
            badge: "Aunt's Favourite",
            description: "Authentic hand-spun pashmina featuring intricate Sozni needlework in ivory and metallic gold threads.",
            svgIcon: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="50" width="140" height="150" rx="15" fill="url(#shawlGrad)" stroke="#d4af37" stroke-width="2"/>
                <path d="M30 80H170M30 110H170M30 140H170M30 170H170" stroke="#d4af37" stroke-width="1" stroke-opacity="0.5"/>
                <circle cx="100" cy="125" r="30" fill="#d4af37" fill-opacity="0.2" stroke="#d4af37" stroke-width="2"/>
                <defs>
                    <linearGradient id="shawlGrad" x1="30" y1="50" x2="170" y2="200" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#097553"/>
                        <stop offset="100%" stop-color="#043927"/>
                    </linearGradient>
                </defs>
            </svg>`
        },
        {
            id: 4,
            title: "The Regal Emerald Maxi Gown",
            category: "couture",
            price: 82000,
            badge: "Bespoke",
            description: "Flowing organza maxi gown with shimmering gold filigree and hand-beaded pearl borders.",
            svgIcon: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 35C75 35 88 25 100 25C112 25 125 35 125 35L145 225H55L75 35Z" fill="url(#maxiGrad)" stroke="#d4af37" stroke-width="2"/>
                <path d="M100 25V225" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="5 5"/>
                <defs>
                    <linearGradient id="maxiGrad" x1="55" y1="25" x2="145" y2="225" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#06543b"/>
                        <stop offset="100%" stop-color="#01180e"/>
                    </linearGradient>
                </defs>
            </svg>`
        },
        {
            id: 5,
            title: "Dad's Formal Raw Silk Kurta",
            category: "mens",
            price: 28000,
            badge: "Classic",
            description: "Pure raw silk kurta in rich ivory with delicate emerald resham embroidery on the collar and cuffs.",
            svgIcon: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65 45L100 35L135 45L145 215H55L65 45Z" fill="url(#kurtaGrad)" stroke="#d4af37" stroke-width="2"/>
                <path d="M100 35V120" stroke="#d4af37" stroke-width="2"/>
                <defs>
                    <linearGradient id="kurtaGrad" x1="55" y1="35" x2="145" y2="215" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#fbf9f1"/>
                        <stop offset="100%" stop-color="#eadecd"/>
                    </linearGradient>
                </defs>
            </svg>`
        },
        {
            id: 6,
            title: "Mom & Aunt Matching Zari Dupatta",
            category: "shawls",
            price: 22000,
            badge: "Limited Edition",
            description: "Banarasi organza dupatta with heavy gold tilla work and scalloped embroidered edges.",
            svgIcon: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="60" width="120" height="130" rx="10" fill="url(#dupattaGrad)" stroke="#d4af37" stroke-width="2"/>
                <path d="M40 90H160M40 120H160M40 150H160" stroke="#d4af37" stroke-width="1.5"/>
                <defs>
                    <linearGradient id="dupattaGrad" x1="40" y1="60" x2="160" y2="190" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#0d996d"/>
                        <stop offset="100%" stop-color="#06543b"/>
                    </linearGradient>
                </defs>
            </svg>`
        }
    ];

    // State Management
    let cart = [];
    let wishlist = [];

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const categoryTabs = document.querySelectorAll('.tab-btn');
    const cartCount = document.getElementById('cartCount');
    const wishlistCount = document.getElementById('wishlistCount');
    const cartDrawer = document.getElementById('cartDrawer');
    const wishlistDrawer = document.getElementById('wishlistDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const wishlistOverlay = document.getElementById('wishlistOverlay');
    const openCartBtn = document.getElementById('openCartBtn');
    const openWishlistBtn = document.getElementById('openWishlistBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const closeWishlistBtn = document.getElementById('closeWishlistBtn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const generateVoucherBtn = document.getElementById('generateVoucherBtn');
    const voucherCodeDisplay = document.getElementById('voucherCodeDisplay');

    // Format Currency in PKR
    function formatPKR(amount) {
        return 'PKR ' + amount.toLocaleString('en-PK');
    }

    // Render Products Grid
    function renderProducts(category = 'all') {
        productsGrid.innerHTML = '';
        const filtered = category === 'all' 
            ? products 
            : products.filter(p => p.category === category);

        filtered.forEach(product => {
            const isWishlisted = wishlist.some(item => item.id === product.id);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <span class="product-badge">${product.badge}</span>
                <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="${isWishlisted ? 'currentColor' : 'none'}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" stroke-width="2"/></svg>
                </button>
                <div class="product-image-container">
                    ${product.svgIcon}
                </div>
                <div class="product-details">
                    <span class="product-category">${product.category.toUpperCase()}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">${formatPKR(product.price)}</span>
                        <button class="btn-add-cart" data-id="${product.id}">Add to Bag</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        // Attach Event Listeners to New Buttons
        attachProductListeners();
    }

    // Attach Event Listeners to Product Cards
    function attachProductListeners() {
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                addToCart(id);
            });
        });

        document.querySelectorAll('.wishlist-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.getAttribute('data-id'));
                toggleWishlist(id);
            });
        });
    }

    // Category Tabs Filter
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Cart Functions
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        openCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartUI();
    }

    function updateCartUI() {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<div class="empty-state">Your royal shopping bag is empty. Explore our exquisite family collections.</div>`;
            cartTotalAmount.textContent = formatPKR(0);
            return;
        }

        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const div = document.createElement('div');
            div.className = 'drawer-item';
            div.innerHTML = `
                <div class="drawer-item-img">${item.svgIcon}</div>
                <div class="drawer-item-details">
                    <h4 class="drawer-item-title">${item.title}</h4>
                    <div class="drawer-item-price">${formatPKR(item.price)} × ${item.quantity}</div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}" aria-label="Remove item">×</button>
            `;
            cartItemsContainer.appendChild(div);
        });

        cartTotalAmount.textContent = formatPKR(total);

        // Remove item buttons
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                removeFromCart(id);
            });
        });
    }

    // Wishlist Functions
    function toggleWishlist(productId) {
        const product = products.find(p => p.id === productId);
        const index = wishlist.findIndex(item => item.id === productId);
        
        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push(product);
        }
        
        updateWishlistUI();
        renderProducts(document.querySelector('.tab-btn.active').getAttribute('data-category'));
    }

    function updateWishlistUI() {
        wishlistCount.textContent = wishlist.length;

        if (wishlist.length === 0) {
            wishlistItemsContainer.innerHTML = `<div class="empty-state">Your wishlist is pristine. Save your favorite family pieces here.</div>`;
            return;
        }

        wishlistItemsContainer.innerHTML = '';
        wishlist.forEach(item => {
            const div = document.createElement('div');
            div.className = 'drawer-item';
            div.innerHTML = `
                <div class="drawer-item-img">${item.svgIcon}</div>
                <div class="drawer-item-details">
                    <h4 class="drawer-item-title">${item.title}</h4>
                    <div class="drawer-item-price">${formatPKR(item.price)}</div>
                </div>
                <button class="btn-add-cart" data-id="${item.id}" style="padding: 0.4rem 0.8rem; font-size: 0.75rem;">Move to Bag</button>
                <button class="remove-item-btn" data-id="${item.id}" aria-label="Remove item">×</button>
            `;
            wishlistItemsContainer.appendChild(div);
        });

        // Wishlist item actions
        wishlistItemsContainer.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                addToCart(id);
                toggleWishlist(id);
                closeWishlist();
            });
        });

        wishlistItemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                toggleWishlist(id);
            });
        });
    }

    // Drawer Controls
    function openCart() {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    }

    function closeCart() {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }

    function openWishlist() {
        wishlistDrawer.classList.add('active');
        wishlistOverlay.classList.add('active');
    }

    function closeWishlist() {
        wishlistDrawer.classList.remove('active');
        wishlistOverlay.classList.remove('active');
    }

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    openWishlistBtn.addEventListener('click', openWishlist);
    closeWishlistBtn.addEventListener('click', closeWishlist);
    wishlistOverlay.addEventListener('click', closeWishlist);

    // Checkout Button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your shopping bag is empty.');
            return;
        }
        
        // Trigger celebratory confetti for order placement
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#d4af37', '#06543b', '#ffffff', '#f3e5ab']
        });

        alert('🎉 Order Placed Successfully! Complimentary Silk Gift Boxing & Gold Embossing activated for Mom, Dad & Aunt. Thank you for shopping with Aura Royal Couture.');
        cart = [];
        updateCartUI();
        closeCart();
    });

    // Family VIP Gift Voucher Button with Golden Confetti
    generateVoucherBtn.addEventListener('click', () => {
        const codes = ['AURA-MOM-VIP-2025', 'AURA-DAD-ROYAL-786', 'AURA-AUNT-REGAL-99', 'AURA-FAMILY-GOLD-50'];
        const randomCode = codes[Math.floor(Math.random() * codes.length)];
        voucherCodeDisplay.textContent = randomCode;

        // Trigger stunning golden confetti burst
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.5 },
            colors: ['#d4af37', '#ffd700', '#fff8dc', '#b89728', '#06543b']
        });
    });

    // Initial Render
    renderProducts('all');
    updateCartUI();
    updateWishlistUI();
});
