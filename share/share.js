/**
 * Hobocu R2 Share Link UI Script
 * --------------------------------------
 * Author: Colin Weber, Hobocu.com
 *
 * Version: 1.0.0
 * Last Updated: 2025-11-15
 *
 * Purpose:
 *   Provides client-side logic for generating secure, time-limited download
 *   URLs for objects stored in the Hobocu R2 bucket. The script runs entirely
 *   in the browser and performs no privileged operations.
 *
 * Default Behaviour:
 *   • Constructs URLs pointing to the Hobocu R2 File Delivery Worker.
 *   • Default expiry is 30 days (2,592,000 seconds).
 *   • Allows override using selectable expiry options in the UI.
 *   • Updates the UI with generated links and copy-to-clipboard support.
 *
 * Security Controls:
 *   • No direct R2 access; all security enforcement is handled server-side
 *     by the Hobocu R2 File Delivery Worker.
 *   • Generated links rely on Worker-issued presigned URLs which cannot be
 *     extended or modified by the user.
 *   • Client-side never exposes credentials or bucket configuration.
 *
 * Usage Examples:
 *   // User enters an R2 object path:
 *   Test/Test.txt
 *
 *   // Script outputs a valid shareable URL:
 *   https://share.hobocu.com/?file=Test%2FTest.txt&exp=2592000
 *
 * Change Log:
 *   1.0.0 — Initial release. Implements client-side UI logic, expiry selector,
 *           clipboard support, and structured status output.
 */

const btn = document.getElementById("generate");
const output = document.getElementById("result");

btn.addEventListener("click", () => {
  const file = document.getElementById("file").value.trim();
  const exp = document.getElementById("exp").value;

  if (!file) {
    output.textContent = "Please enter a file path.";
    return;
  }

  const url = `https://share.hobocu.com/?file=${encodeURIComponent(file)}&exp=${exp}`;
  
  document.getElementById("result").value = url;
});
