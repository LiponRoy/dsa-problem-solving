// Problem:
// একটা sorted array দেওয়া আছে, target sum = 9
// দুটি সংখ্যা খুঁজে বের করো যাদের যোগফল = target
const arr = [1, 2, 3, 4, 6, 8];
const target = 9;

let left = 0;
let right = arr.length - 1;

while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
        console.log(arr[left], arr[right]);
        break;
    } else if (sum < target) {
        left++; // sum বাড়াতে left বাড়াই
    } else {
        right--; // sum কমাতে right কমাই
    }
}
// 🧠 Logic মনে রাখার ট্রিক

// sum ছোট → left++

// sum বড় → right--

// ⏱ Time: O(n)
// 📦 Space: O(1)
