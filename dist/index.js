import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";
import { retryPromise } from "./retryPromise.js";
async function runDashboard() {
    console.log("--- Starting Dashboard Load ---");
    try {
        const products = await retryPromise(fetchProductCatalog, 3, 1000);
        console.log("Catalog Loaded:", products);
        const reviewPromises = products.map(p => fetchProductReviews(p.id));
        const reviews = await Promise.all(reviewPromises);
        console.log("Reviews Loaded:", reviews);
        const sales = await retryPromise(fetchSalesReport, 3, 1000);
        console.log("Sales Report Loaded:", sales);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Critical Error:", error.message);
        }
    }
    finally {
        console.log("--- Attempted all API calls. Dashboard sync complete. ---");
    }
}
runDashboard();
//# sourceMappingURL=index.js.map