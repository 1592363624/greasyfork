
        // 创建浮动提示框元素
        var floatingToast = document.createElement('div');
        floatingToast.className = 'floating-toast';
        floatingToast.id = 'floating-toast';
        document.body.appendChild(floatingToast);
    
        // 添加 CSS 样式
        var style = document.createElement('style');
        style.textContent = `
            .floating-toast {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #2D6BEE;
                color: #FFFFFF;
                padding: 10px 20px;
                border-radius: 8px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                display: none;
                z-index: 9999;
            }
        `;
        document.head.appendChild(style);
    
        // 显示浮动提示框的函数
        function showFloatingToast(message, duration) {
            var toast = document.getElementById('floating-toast');
            toast.textContent = message;
            toast.style.display = 'block';
    
            // 定时隐藏提示框
            setTimeout(function() {
                toast.style.display = 'none';
            }, duration);
        }
          // 创建浮动提示框元素
    
    