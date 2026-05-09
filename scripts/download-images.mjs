import { createWriteStream, existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const images = [
  ["hero-chocolate-cake.jpg", "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=88"],
  ["hero-bakery-table.jpg", "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1800&q=88"],
  ["hero-dessert-table.jpg", "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=88"],
  ["hero-pastries.jpg", "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=88"],
  ["belgian-chocolate-cake.jpg", "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=88"],
  ["strawberry-chantilly-cake.jpg", "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=900&q=88"],
  ["salted-caramel-layer-cake.jpg", "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=88"],
  ["classic-vanilla-birthday-cake.jpg", "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=88"],
  ["signature-celebration-cake.jpg", "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=88"],
  ["butter-croissant-box.jpg", "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=88"],
  ["paris-macaron-set.jpg", "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=88"],
  ["seasonal-fruit-tart.jpg", "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=88"],
  ["fudgy-brownie.jpg", "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88"],
  ["walnut-brownie-slab.jpg", "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88"],
  ["chocolate-hazelnut-cupcake.jpg", "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=900&q=88"],
  ["vanilla-bean-cupcake.jpg", "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=900&q=88"],
  ["mini-indulgence-box.jpg", "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=88"],
  ["hostess-dessert-box.jpg", "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=88"],
  ["country-sourdough.jpg", "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=88"],
  ["buttery-brioche-loaf.jpg", "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=88"],
  ["velvet-iced-latte.jpg", "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=88"],
  ["signature-tea-service.jpg", "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=88"],
  ["luxury-cookie-tin.jpg", "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=88"],
  ["celebration-dessert-hamper.jpg", "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=88"],
  ["tiramisu-slice.jpg", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=88"],
  ["chocolate-fudge-birthday-cake.jpg", "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=88"],
  ["brownie-gift-bites.jpg", "https://images.unsplash.com/photo-1590841609987-4ac211afdde1?auto=format&fit=crop&w=900&q=88"],
  ["maison-cappuccino.jpg", "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=88"],
  ["about-baker.jpg", "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=88"],
  ["custom-celebration-cake.jpg", "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1400&q=88"],
  ["gallery-dessert-table.jpg", "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=900&q=88"],
  ["gallery-cupcakes.jpg", "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=88"],
  ["gallery-pastries.jpg", "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=88"],
  ["gallery-cake-slice.jpg", "https://images.unsplash.com/photo-1541781550486-81b7a2328578?auto=format&fit=crop&w=900&q=88"],
  ["gallery-chocolate-cake.jpg", "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=88"],
  ["gallery-dessert-plate.jpg", "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=88"]
];

await mkdir(resolve("public/images"), { recursive: true });

for (const [fileName, url] of images) {
  const destination = resolve("public/images", fileName);
  if (existsSync(destination)) {
    console.log(`skip ${fileName}`);
    continue;
  }

  const response = await fetch(url, {
    headers: {
      "User-Agent": "MaisonCrumbImageDownloader/1.0"
    }
  });

  if (!response.ok || !response.body) {
    throw new Error(`Failed to download ${fileName}: ${response.status} ${response.statusText}`);
  }

  await mkdir(dirname(destination), { recursive: true });
  await pipeline(response.body, createWriteStream(destination));
  console.log(`saved ${fileName}`);
}
