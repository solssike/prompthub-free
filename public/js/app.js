let allPrompts = [];

// 初始化：获取数据并渲染
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/prompts.json');
        allPrompts = await response.json();
        renderPrompts(allPrompts);
    } catch (err) {
        console.error("加载数据失败", err);
    }

    // 绑定分类点击事件
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.cat-btn.active').classList.remove('active');
            e.target.classList.add('active');
            const cat = e.target.dataset.cat;
            filterPrompts(cat);
        });
    });
});

function renderPrompts(data) {
    const grid = document.getElementById('promptGrid');
    grid.innerHTML = data.map(item => `
        <div class="card">
            <div class="card-tag">${item.tag}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="card-footer">
                <div class="info">
                    <span class="price">¥${item.price}</span>
                    <span class="sales">已售 ${item.sales}</span>
                </div>
                <button class="buy-btn" onclick="goToPay(${item.id})">获取</button>
            </div>
        </div>
    `).join('');
}

function filterPrompts(category) {
    if (category === 'all') {
        renderPrompts(allPrompts);
    } else {
        const filtered = allPrompts.filter(p => p.category === category);
        renderPrompts(filtered);
    }
}

function searchPrompts() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allPrompts.filter(p => 
        p.title.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
    );
    renderPrompts(filtered);
}

function goToPay(id) {
    // 简单模拟：携带ID跳转到支付页
    window.location.href = `pay.html?id=${id}`;
}
