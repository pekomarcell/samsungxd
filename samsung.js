

let charact = { type: "Galaxy s23", kial: "Érintőképernyős", size: "146 x 70,6 x 7,6 mm", weight: "167 g" };
let system = { opsystem: "Android 12", smart: "Igen", proci: "Exynos 2200", proctype: "MTK 5G-B+", procmag: "8", procspeed: "2.8GHz,2.5GHz,1.8GHz"}
let memory = { inner: "128/256 GB", ramsize: "8 GB"}
let screen = { screentype: "Dynamic AMOLED 2X", screensize:"6.1", screenres: "FHD+ (2340 x 1080) PX", colordepth: "16 millió"}

document.getElementById("tul").innerHTML = "Típusa: " + charact.type + " Kialakítása: " + charact.kial + " Méret: " + charact.size + " Súly: " + charact.weight;
document.getElementById("sy").innerHTML = "Operációs rendszer: " + system.opsystem + " Okostelefon: " + system.smart + " Processzor gyártó: " + system.proci + " Processzor típusa: " + system.proctype + " Processzormagok száma: " + system.procmag + " Processzor sebessége: " + system.procspeed;
document.getElementById("mem").innerHTML = "Belső memória: " + memory.inner + " RAM mérete: " + memory.ramsize;
document.getElementById("scre").innerHTML = "Kijelző típusa: " + screen.screentype + " Kijelző mérete: " + screen.screensize + " Felbontás: " + screen.screenres + " Színmélység: " + screen.colordepth;


