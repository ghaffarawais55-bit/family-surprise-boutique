/* --- Maison d'Élégance Luxury Boutique Application --- */
/* --- Built and Engineered by Awais --- */

// Product Database with PKR prices and custom SVG icon definitions
const products = [
    {
        id: 1,
        title: "Sovereign Emerald Zardozi Sherwani",
        category: "men",
        badge: "Royal Heirloom",
        price: 85000,
        description: "Exquisite deep emerald velvet sherwani hand-embroidered with 24k gold bullion threads, antique dabka, and emerald crystal buttons. Crafted for regal grooms and patriarchs.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 40 L100 25 L130 40 L140 120 L130 220 L70 220 L60 120 Z" fill="#0A281F" stroke="#D4AF37" stroke-width="2"/>
            <path d="M100 25 L100 220 M75 70 Q100 90 125 70 M70 120 Q100 140 130 120" stroke="#D4AF37" stroke-width="1.5" opacity="0.8"/>
            <circle cx="100" cy="70" r="4" fill="#D4AF37"/>
            <circle cx="100" cy="110" r="4" fill="#D4AF37"/>
            <circle cx="100" cy="150" r="4" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: 2,
        title: "Ivory Silk Bridal Heirloom Lehenga",
        category: "women",
        badge: "Masterpiece",
        price: 145000,
        description: "Pure raw ivory silk lehenga featuring opulent dabka, pearls, and cut-dana work. Paired with an emerald tissue dupatta bordered in scalloped gold zardozi.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 50 C90 35 110 35 120 50 C140 100 170 190 180 220 C185 235 170 240 155 240 L45 240 C30 240 15 235 20 220 C30 190 60 100 80 50 Z" fill="#0F382B" stroke="#D4AF37" stroke-width="2"/>
            <path d="M100 50 L100 240 M60 100 Q100 130 140 100 M45 160 Q100 190 155 160" stroke="#D4AF37" stroke-width="1.5" opacity="0.8"/>
            <circle cx="100" cy="80" r="5" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: 3,
        title: "Petit Sovereign Prince Suit",
        category: "kids",
        badge: "Junior Royal",
        price: 32000,
        description: "A charming miniature velvet bandhgala suit crafted for young princes, featuring delicate gold collar embroidery and comfortable silk lining.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75 55 L100 40 L125 55 L135 130 L125 210 L75 210 L65 130 Z" fill="#051B13" stroke="#D4AF37" stroke-width="2"/>
            <path d="M100 40 L100 210 M70 90 Q100 110 130 90" stroke="#D4AF37" stroke-width="1.2" opacity="0.8"/>
            <polygon points="100,65 104,75 100,85 96,75" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: 4,
        title: "Royal Emerald Velvet Pashmina Shawl",
        category: "gifts",
        badge: "Limited Edition",
        price: 45000,
        description: "Hand-spun cashmere pashmina dyed in deep emerald green, adorned with intricate Kashmiri sozni needlework in shimmering gold and ivory threads.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="60" width="120" height="130" rx="15" fill="#0A281F" stroke="#D4AF37" stroke-width="2"/>
            <path d="M60 80 Q100 120 140 80 M60 170 Q100 130 140 170" stroke="#D4AF37" stroke-width="1.5" opacity="0.9"/>
            <circle cx="100" cy="125" r="18" stroke="#D4AF37" stroke-width="1.5" fill="#051B13"/>
        </svg>`
    },
    {
        id: 5,
        title: "Ivory Organza Peplum & Gharara",
        category: "women",
        badge: "Bespoke",
        price: 95000,
        description: "Ethereal pure organza peplum top paired with a flowing double-layer gharara, embellished with intricate mirrorwork and gold tilla borders.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 50 L130 50 C140 100 150 140 160 210 C165 225 150 230 135 230 L65 230 C50 230 35 225 40 210 C50 140 60 100 70 50 Z" fill="#0F382B" stroke="#D4AF37" stroke-width="2"/>
            <path d="M100 50 L100 230 M55 120 Q100 150 145 120" stroke="#D4AF37" stroke-width="1.5" opacity="0.8"/>
            <circle cx="100" cy="75" r="4" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: 6,
        title: "Sovereign Gold Cufflinks & Pocket Square Set",
        category: "gifts",
        badge: "Collector",
        price: 18500,
        description: "24k gold-plated sterling silver cufflinks featuring the Maison crest, accompanied by a pure emerald silk jacquard pocket square.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="55" y="75" width="90" height="90" rx="10" transform="rotate(45 100 120)" fill="#0A281F" stroke="#D4AF37" stroke-width="2"/>
            <circle cx="100" cy="120" r="25" fill="#D4AF37" opacity="0.2"/>
            <polygon points="100,95 108,112 125,120 108,128 100,145 92,128 75,120 92,112" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: 7,
        title: "Petit Princess Gold Tissue Frock",
        category: "kids",
        badge: "Heirloom",
        price: 28000,
        description: "Delicate gold tissue frock for young princesses featuring hand-stitched floral pearl motifs and an ivory organza sash.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 60 C90 45 110 45 120 60 C140 110 160 180 170 215 C175 225 165 230 150 230 L50 230 C35 230 25 225 30 215 C40 180 60 110 80 60 Z" fill="#051B13" stroke="#D4AF37" stroke-width="2"/>
            <path d="M100 60 L100 230 M60 110 Q100 130 140 110" stroke="#D4AF37" stroke-width="1.2" opacity="0.8"/>
            <circle cx="100" cy="85" r="4" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: 8,
        title: "Sovereign Brocade Kurta & Waistcoat",
        category: "men",
        badge: "Bespoke",
        price: 55000,
        description: "Pure raw silk ivory kurta paired with a deep emerald jacquard waistcoat woven with intricate gold motifs. The quintessential family celebration attire.",
        svgArt: `<svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 45 L100 30 L130 45 L135 220 L65 220 Z" fill="#0F382B" stroke="#D4AF37" stroke-width="2"/>
            <path d="M100 30 L100 220 M70 90 Q100 110 130 90 M68 150 Q100 170 132 150" stroke="#D4AF37" stroke-width="1.5" opacity="0.8"/>
            <circle cx="100" cy="70" r="4" fill="#D4AF37"/>
        </svg>`
    }
];

// State Management
let shoppingBag = [];
let wishlist = [];
let appliedVoucher = null;
const voucherCodeValue = "MAISON-VIP-2025-AW";
const voucherDiscount = 15000;

// Format PKR Currency
function formatPKR(amount) {
    return "PKR " + amount.toLocaleString('en-PK');
}

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const bagBadge = document.getElementById('bagBadge');
const wishlistBadge = document.getElementById('wishlistBadge');
const bagCountHeader = document.getElementById('bagCountHeader');
const wishlistCountHeader = document.getElementById('wishlistCountHeader');
const bagItemsContainer = document.getElementById('bagItemsContainer');
const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');
const bagSubtotal = document.getElementById('bagSubtotal');
const bagTotal = document.getElementById('bagTotal');
const bagDrawer = document.getElementById('bagDrawer');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const bagBtn = document.getElementById('bagBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const closeBagDrawer = document.getElementById('closeBagDrawer');
const closeWishlistDrawer = document.getElementById('closeWishlistDrawer');
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const quickViewContent = document.getElementById('quickViewContent');
const vipModal = document.getElementById('vipModal');
const closeVipModal = document.getElementById('closeVipModal');
const vipVoucherBtn = document.getElementById('vipVoucherBtn');
const claimVoucherBtn = document.getElementById('claimVoucherBtn');
const heroSurpriseBtn = document.getElementById('heroSurpriseBtn');
const applyVoucherModalBtn = document.getElementById('applyVoucherModalBtn');
const moveAllToBagBtn = document.getElementById('moveAllToBagBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setupEventListeners();
    updateBadges();
});

// Render Products Grid
function renderProducts(category) {
    productsGrid.innerHTML = '';
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gray-text); padding: 40px;">No sovereign masterpieces found in this category.</p>`;
        return;
    }

    filtered.forEach(product => {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="product-badge">${product.badge}</span>
            <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Wishlist">
                <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <div class="product-image-container" onclick="openQuickView(${product.id})" style="cursor: pointer;">
                <div class="product-svg-thumb">${product.svgArt}</div>
            </div>
            <div class="product-info">
                <span class="product-category-tag">${product.category.toUpperCase()}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description.substring(0, 85)}...</p>
                <div class="product-footer-row">
                    <span class="product-price">${formatPKR(product.price)}</span>
                    <div class="card-actions">
                        <button class="btn-icon-sm btn-quick" onclick="openQuickView(${product.id})" title="Quick View"><i class="fa-solid fa-eye"></i></button>
                        <button class="btn-icon-sm" onclick="addToBag(${product.id})" title="Add to Bag"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Category Tabs Event Listeners
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const category = e.target.getAttribute('data-category');
        renderProducts(category);
    });
});

// Add to Shopping Bag
function addToBag(productId) {
    const product = products.find(p => p.id === productId);
    const existing = shoppingBag.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        shoppingBag.push({ ...product, qty: 1 });
    }
    updateBagDrawer();
    updateBadges();
    openBagDrawer();
}

// Toggle Wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }
    // Re-render current category to update heart icons
    const activeTab = document.querySelector('.tab-btn.active');
    const cat = activeTab ? activeTab.getAttribute('data-category') : 'all';
    renderProducts(cat);
    updateWishlistDrawer();
    updateBadges();
}

// Update Badges
function updateBadges() {
    const totalBagQty = shoppingBag.reduce((sum, item) => sum + item.qty, 0);
    bagBadge.textContent = totalBagQty;
    bagCountHeader.textContent = totalBagQty;

    wishlistBadge.textContent = wishlist.length;
    wishlistCountHeader.textContent = wishlist.length;
}

// Update Bag Drawer
function updateBagDrawer() {
    if (shoppingBag.length === 0) {
        bagItemsContainer.innerHTML = `
            <div class="empty-drawer">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your royal shopping bag is currently empty.</p>
            </div>
        `;
        bagSubtotal.textContent = formatPKR(0);
        bagTotal.textContent = formatPKR(0);
        return;
    }

    bagItemsContainer.innerHTML = '';
    let subtotal = 0;

    shoppingBag.forEach(item => {
        subtotal += item.price * item.qty;
        const itemEl = document.createElement('div');
        itemEl.className = 'drawer-item';
        itemEl.innerHTML = `
            <div class="drawer-item-img">${item.svgArt}</div>
            <div class="drawer-item-details">
                <h4 class="drawer-item-title">${item.title}</h4>
                <div class="drawer-item-price">${formatPKR(item.price)}</div>
                <div class="drawer-item-controls">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="removeFromBag(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        `;
        bagItemsContainer.appendChild(itemEl);
    });

    bagSubtotal.textContent = formatPKR(subtotal);
    let total = subtotal;
    if (appliedVoucher) {
        total = Math.max(0, subtotal - voucherDiscount);
        bagSubtotal.innerHTML = `${formatPKR(subtotal)} <br><span style="font-size:0.8rem; color:var(--gold-dark);">VIP Voucher (-${formatPKR(voucherDiscount)}) Applied</span>`;
    }
    bagTotal.textContent = formatPKR(total);
}

// Change Quantity
function changeQty(productId, delta) {
    const item = shoppingBag.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            shoppingBag = shoppingBag.filter(i => i.id !== productId);
        }
    }
    updateBagDrawer();
    updateBadges();
}

// Remove from Bag
function removeFromBag(productId) {
    shoppingBag = shoppingBag.filter(i => i.id !== productId);
    updateBagDrawer();
    updateBadges();
}

// Update Wishlist Drawer
function updateWishlistDrawer() {
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `
            <div class="empty-drawer">
                <i class="fa-regular fa-heart"></i>
                <p>Your curated wishlist is empty.</p>
            </div>
        `;
        return;
    }

    wishlistItemsContainer.innerHTML = '';
    wishlist.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'drawer-item';
        itemEl.innerHTML = `
            <div class="drawer-item-img">${item.svgArt}</div>
            <div class="drawer-item-details">
                <h4 class="drawer-item-title">${item.title}</h4>
                <div class="drawer-item-price">${formatPKR(item.price)}</div>
                <div class="drawer-item-controls">
                    <button class="btn btn-gold" style="padding: 6px 12px; font-size: 0.75rem;" onclick="moveWishlineToBag(${item.id})"><i class="fa-solid fa-bag-shopping"></i> Move to Bag</button>
                    <button class="remove-item-btn" onclick="removeFromWishlist(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        `;
        wishlistItemsContainer.appendChild(itemEl);
    });
}

// Move single wishlist item to bag
function moveWishlineToBag(productId) {
    addToBag(productId);
    removeFromWishlist(productId);
}

// Remove from Wishlist
function removeFromWishlist(productId) {
    wishlist = wishlist.filter(i => i.id !== productId);
    const activeTab = document.querySelector('.tab-btn.active');
    const cat = activeTab ? activeTab.getAttribute('data-category') : 'all';
    renderProducts(cat);
    updateWishlistDrawer();
    updateBadges();
}

// Move all wishlist to bag
moveAllToBagBtn.addEventListener('click', () => {
    if (wishlist.length === 0) return;
    wishlist.forEach(item => {
        const existing = shoppingBag.find(i => i.id === item.id);
        if (existing) {
            existing.qty += 1;
        } else {
            shoppingBag.push({ ...item, qty: 1 });
        }
    });
    wishlist = [];
    const activeTab = document.querySelector('.tab-btn.active');
    const cat = activeTab ? activeTab.getAttribute('data-category') : 'all';
    renderProducts(cat);
    updateWishlistDrawer();
    updateBagDrawer();
    updateBadges();
    closeWishlistDrawerFn();
    openBagDrawer();
});

// Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    quickViewContent.innerHTML = `
        <div class="modal-img-box">${product.svgArt}</div>
        <div class="modal-details">
            <span class="product-category-tag">${product.category.toUpperCase()} • ${product.badge}</span>
            <h2>${product.title}</h2>
            <div class="modal-price">${formatPKR(product.price)}</div>
            <p class="modal-desc">${product.description}</p>
            <button class="btn btn-gold btn-full" onclick="addToBag(${product.id}); closeQuickViewFn();"><i class="fa-solid fa-bag-shopping"></i> Add to Sovereign Bag</button>
        </div>
    `;
    quickViewModal.classList.add('active');
}

function closeQuickViewFn() {
    quickViewModal.classList.remove('active');
}
closeQuickView.addEventListener('click', closeQuickViewFn);

// Open/Close Drawers
function openBagDrawer() {
    bagDrawer.classList.add('active');
    wishlistDrawer.classList.remove('active');
    drawerOverlay.classList.add('active');
}

function closeBagDrawerFn() {
    bagDrawer.classList.remove('active');
    if (!wishlistDrawer.classList.contains('active')) {
        drawerOverlay.classList.remove('active');
    }
}

function openWishlistDrawer() {
    wishlistDrawer.classList.add('active');
    bagDrawer.classList.remove('active');
    drawerOverlay.classList.add('active');
}

function closeWishlistDrawerFn() {
    wishlistDrawer.classList.remove('active');
    if (!bagDrawer.classList.contains('active')) {
        drawerOverlay.classList.remove('active');
    }
}

bagBtn.addEventListener('click', () => {
    updateBagDrawer();
    openBagDrawer();
});

wishlistBtn.addEventListener('click', () => {
    updateWishlistDrawer();
    openWishlistDrawer();
});

closeBagDrawer.addEventListener('click', closeBagDrawerFn);
closeWishlistDrawer.addEventListener('click', closeWishlistDrawerFn);
drawerOverlay.addEventListener('click', () => {
    closeBagDrawerFn();
    closeWishlistDrawerFn();
});

// VIP Voucher Trigger with Golden Confetti
function triggerVipCelebration() {
    vipModal.classList.add('active');
    // Launch celebratory confetti burst
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#051B13', '#FFFFFF']
    });
}

vipVoucherBtn.addEventListener('click', triggerVipCelebration);
claimVoucherBtn.addEventListener('click', triggerVipCelebration);
heroSurpriseBtn.addEventListener('click', triggerVipCelebration);

function closeVipModalFn() {
    vipModal.classList.remove('active');
}
closeVipModal.addEventListener('click', closeVipModalFn);

applyVoucherModalBtn.addEventListener('click', () => {
    appliedVoucher = voucherCodeValue;
    closeVipModalFn();
    updateBagDrawer();
    openBagDrawer();
    // Tiny confetti burst on apply
    confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#051B13']
    });
});

// Checkout Simulation
checkoutBtn.addEventListener('click', () => {
    if (shoppingBag.length === 0) {
        alert("Your shopping bag is empty.");
        return;
    }
    alert("Secure Royal Checkout initiated! Thank you for shopping with Maison d'Élégance. Your order will be handcrafted with utmost precision.");
    shoppingBag = [];
    appliedVoucher = null;
    updateBagDrawer();
    updateBadges();
    closeBagDrawerFn();
});

// Mobile Nav Toggle
navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// Setup General Event Listeners
function setupEventListeners() {
    // Escape key closes modals/drawers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBagDrawerFn();
            closeWishlistDrawerFn();
            closeQuickViewFn();
            closeVipModalFn();
            drawerOverlay.classList.remove('active');
        }
    });
}
