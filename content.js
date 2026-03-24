// Biến cờ để đảm bảo chỉ gán sự kiện keydown 1 lần duy nhất trên toàn trang
let isKeyboardListenerAdded = false;

function enableYoutubeShortcuts(video) {
    // Đánh dấu là đã xử lý video này rồi
    if (video.getAttribute('data-yt-controlled')) return;
    video.setAttribute('data-yt-controlled', 'true');

    console.log("✅ Đã tìm thấy video! Full bộ điều khiển YouTube đã kích hoạt. 🚀");

    if (!isKeyboardListenerAdded) {
        document.addEventListener('keydown', (e) => {
            // Chỉ chạy khi không gõ vào ô input, textarea hoặc các thẻ có thể nhập liệu
            if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) || document.activeElement.isContentEditable) return;

            // Luôn lấy thẻ video đang hiện hữu trên trang để thao tác
            const activeVideo = document.querySelector('video');
            if (!activeVideo) return;

            switch (e.key) {
                case "ArrowLeft": // Mũi tên trái: Tua lại 5s
                    activeVideo.currentTime -= 5;
                    break;
                case "ArrowRight": // Mũi tên phải: Tua đi 5s
                    activeVideo.currentTime += 5;
                    break;
                
                case "ArrowUp": // Mũi tên lên: Tăng 5% âm lượng
                    e.preventDefault(); 
                    activeVideo.volume = Math.min(1, activeVideo.volume + 0.05);
                    console.log(`🔊 Volume: ${Math.round(activeVideo.volume * 100)}%`);
                    break;
                case "ArrowDown": // Mũi tên xuống: Giảm 5% âm lượng
                    e.preventDefault(); 
                    activeVideo.volume = Math.max(0, activeVideo.volume - 0.05);
                    console.log(`🔉 Volume: ${Math.round(activeVideo.volume * 100)}%`);
                    break;

                case " ": // Phím cách
                case "k": // Phím K (thêm cả chữ hoa đề phòng đang bật CapsLock)
                case "K":
                    e.preventDefault(); 
                    activeVideo.paused ? activeVideo.play() : activeVideo.pause();
                    break;
                case "f":
                case "F":
                    document.fullscreenElement ? document.exitFullscreen() : activeVideo.requestFullscreen();
                    break;
                 case "m":
                 case "M":
                    activeVideo.muted = !activeVideo.muted;
                    console.log(activeVideo.muted ? "🔇 Muted" : "🔈 Unmuted");
                    break;
            }
        });
        isKeyboardListenerAdded = true; // Đánh dấu là đã gán sự kiện
    }
}

// --- NÂNG CẤP: Sử dụng MutationObserver thay cho setInterval ---
const observer = new MutationObserver((mutationsList, observer) => {
    // Mỗi khi DOM thay đổi, thử tìm thẻ video
    const video = document.querySelector('video');
    
    // Nếu thấy video và nó chưa được gắn cờ điều khiển
    if (video && !video.getAttribute('data-yt-controlled')) {
        enableYoutubeShortcuts(video);
        
        // Ghi chú: Nếu trang web của cậu chỉ load 1 video duy nhất rồi thôi, 
        // cậu có thể bỏ comment dòng dưới đây để tắt bộ theo dõi, tiết kiệm bộ nhớ hơn nữa.
        // observer.disconnect(); 
    }
});

// Bắt đầu theo dõi sự thay đổi của toàn bộ nội dung trang web (body)
observer.observe(document.body, {
    childList: true, // Theo dõi việc thêm/bớt phần tử con
    subtree: true    // Theo dõi sâu xuống tận các phần tử cháu chắt
});

// Chạy kiểm tra ngay lúc kịch bản vừa được nạp đề phòng video đã có sẵn từ trước
const existingVideo = document.querySelector('video');
if (existingVideo) {
    enableYoutubeShortcuts(existingVideo);
}