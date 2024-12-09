   // Substitua pela sua chave de API do Geoapify
   const apiKey = "32ae363266464de5b8607ccf65422e95";

   let map; // Global map variable
   let currentMarker; // Global marker variable

   // Dados dos pontos com horários
   const pontos = [
       {"id":"1","linha":"3502",  "horario": "06:05",  "latitude":-19.878853909942613,"longitude":-43.98593263294486},
       {"id":"2","linha":"3502",  "horario": "06:10",  "latitude":-19.8788688174539,"longitude":-43.98593966137369},
       {"id":"3","linha":"3502",  "horario": "06:15",  "latitude":-19.87812471190135,"longitude":-43.9851457275154},
       {"id":"4","linha":"3502",  "horario": "06:20",  "latitude":-19.87646212661076,"longitude":-43.98362272011674},
       {"id":"5","linha":"3502",  "horario": "06:25",  "latitude":-19.875508011394576,"longitude":-43.9841196745598},
       {"id":"6","linha":"3502",  "horario": "06:30",  "latitude":-19.874063861361897,"longitude":-43.98353644767251},
       {"id":"7","linha":"3502",  "horario": "06:35",  "latitude":-19.87306858142877,"longitude":-43.98200967809083},
       {"id":"8","linha":"3502",  "horario": "06:40",  "latitude":-19.87114339236223,"longitude":-43.98184914026486},
       {"id":"9","linha":"3502",  "horario": "06:45",  "latitude":-19.871434132430633,"longitude":-43.9803584062397},
       {"id":"10","linha":"3502", "horario": "06:50", "latitude":-19.872143518414344,"longitude":-43.979048783506826},
       {"id":"11","linha":"3502", "horario": "06:55", "latitude":-19.872936100712586,"longitude":-43.97815611786572},
       {"id":"12","linha":"3502", "horario": "07:00", "latitude":-19.876977333159328,"longitude":-43.97713523450395},
       {"id":"13","linha":"3502", "horario": "07:05", "latitude":-19.880576737209292,"longitude":-43.97594774942916},
       {"id":"14","linha":"3502", "horario": "07:10", "latitude":-19.88468221919514,"longitude":-43.97285307803166},
       {"id":"15","linha":"3502", "horario": "07:15", "latitude":-19.888159428997522,"longitude":-43.968246685831645},
       {"id":"16","linha":"3502", "horario": "07:20", "latitude":-19.89631805412012,"longitude":-43.965936297597636},
       {"id":"17","linha":"3502", "horario": "07:25", "latitude":-19.899730660224932,"longitude":-43.966514201869515},
       {"id":"18","linha":"3502", "horario": "07:30", "latitude":-19.903559238160277,"longitude":-43.96573976004232},
       {"id":"19","linha":"3502", "horario": "07:35", "latitude":-19.90829509942804,"longitude":-43.95935307224595},
       {"id":"20","linha":"3502", "horario": "07:40", "latitude":-19.911015833568957,"longitude":-43.955654875416336},
       {"id":"21","linha":"3502", "horario": "07:45", "latitude":-19.914169977841645,"longitude":-43.952846520129256},
       {"id":"22","linha":"3502", "horario": "07:50", "latitude":-19.913569666122942,"longitude":-43.949661310026414},
       {"id":"23","linha":"3502", "horario": "07:55", "latitude":-19.912942270116762,"longitude":-43.94647193193027},
       {"id":"24","linha":"3502", "horario": "08:00", "latitude":-19.91297256469118,"longitude":-43.945974559369965},
       {"id":"25","linha":"3502", "horario": "08:05", "latitude":-19.915224467789574,"longitude":-43.94382611046944},
       {"id":"26","linha":"3502", "horario": "08:10", "latitude":-19.91470414905565,"longitude":-43.94369852238929},
       {"id":"27","linha":"3502", "horario": "08:15", "latitude":-19.91629240401402,"longitude":-43.93961547730921},
       {"id":"28","linha":"3502", "horario": "08:20", "latitude":-19.916544587844243,"longitude":-43.93867222174982},
       {"id":"29","linha":"3502", "horario": "08:25", "latitude":-19.916991051534012,"longitude":-43.93695120474454},
       {"id":"30","linha":"3502", "horario": "08:30", "latitude":-19.91575133276388,"longitude":-43.936265693332565},
       {"id":"31","linha":"3502", "horario": "08:35", "latitude":-19.903370862649954,"longitude":-43.93064742305277},
       {"id":"32","linha":"3502", "horario": "08:40", "latitude":-19.899890586937683,"longitude":-43.92792404944685},
       {"id":"33","linha":"3502", "horario": "08:45", "latitude":-19.891932224627503,"longitude":-43.92815654899113},
       {"id":"34","linha":"3502", "horario": "08:50", "latitude":-19.88905084229158,"longitude":-43.92903629401513},
       {"id":"35","linha":"3502", "horario": "08:55", "latitude":-19.886455768097008,"longitude":-43.92911441960123},
       {"id":"36","linha":"3502", "horario": "09:00", "latitude":-19.88365298550778,"longitude":-43.9295821883174},
       {"id":"37","linha":"3502", "horario": "09:05", "latitude":-19.879184435275043,"longitude":-43.92921304338955},
       {"id":"38","linha":"3502", "horario": "09:10", "latitude":-19.869675181606336,"longitude":-43.92732733683577},
       {"id":"39","linha":"3502", "horario": "09:15", "latitude":-19.869030015860844,"longitude":-43.92541188276315},
       {"id":"40","linha":"3502", "horario": "09:20", "latitude":-19.868247059502785,"longitude":-43.925151922049345},
       {"id":"41","linha":"3502", "horario": "09:25", "latitude":-19.86692712432241,"longitude":-43.925504384123286},
       {"id":"42","linha":"3502", "horario": "09:30", "latitude":-19.865465840773695,"longitude":-43.92546356323355},
       {"id":"43","linha":"3502", "horario": "09:35", "latitude":-19.86333890251662,"longitude":-43.92538382068368},
       {"id":"44","linha":"3502", "horario": "09:40", "latitude":-19.861984532272537,"longitude":-43.923575803784914},
       {"id":"45","linha":"3502", "horario": "09:45", "latitude":-19.860577219937408,"longitude":-43.922838586744405},
       {"id":"46","linha":"3502", "horario": "09:50", "latitude":-19.859786438695057,"longitude":-43.92086719988393},
       {"id":"47","linha":"3502", "horario": "09:55", "latitude":-19.858809935612026,"longitude":-43.91950679196751},
       {"id":"48","linha":"3502", "horario": "10:00", "latitude":-19.85674290926096,"longitude":-43.920596075214014},
       {"id":"49","linha":"3502", "horario": "10:05", "latitude":-19.85497534501402,"longitude":-43.91884425352023},
       {"id":"50","linha":"3502", "horario": "10:10", "latitude":-19.852820774583616,"longitude":-43.917599025301044},
       {"id":"51","linha":"3502", "horario": "10:15", "latitude":-19.85166863388113,"longitude":-43.918088031061295},
       {"id":"52","linha":"3502", "horario": "10:20", "latitude":-19.850279158829643,"longitude":-43.91727088641918},
       {"id":"53","linha":"3502", "horario": "10:25", "latitude":-19.84987113382642,"longitude":-43.91677648260549},
       {"id":"54","linha":"3502", "horario": "10:30", "latitude":-19.851091817625637,"longitude":-43.91640196959011},
       {"id":"55","linha":"3502", "horario": "10:35", "latitude":-19.851717586542204,"longitude":-43.91521123241717},
       {"id":"56","linha":"3502", "horario": "10:40", "latitude":-19.85227060937516,"longitude":-43.91385033112967},
       {"id":"57","linha":"3502", "horario": "10:45", "latitude":-19.85117824685346,"longitude":-43.913001832047364},
       {"id":"58","linha":"3502", "horario": "10:50", "latitude":-19.850665991166707,"longitude":-43.91246885548656},
       {"id":"59","linha":"3502", "horario": "10:55", "latitude":-19.84917882356584,"longitude":-43.91242029184448}
   ];  


// Função para preencher a tabela e buscar nomes das ruas
async function preencherTabela() {
  const table = document.getElementById("pointsTable");

  for (let ponto of pontos) {
    // Geocodificação reversa para obter o nome da rua
    const nomeRua = await obterNomeRua(ponto.latitude, ponto.longitude);

    // Cria a linha na tabela
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nomeRua || "Ponto Desconhecido"}</td>
      <td>${ponto.horario}</td>

    `;
    table.appendChild(row);
  }
}

// Função para obter o nome da rua usando geocodificação reversa do Geoapify
async function obterNomeRua(lat, lon) {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.features[0]?.properties?.formatted || null;
  } catch (error) {
    console.error("Erro ao buscar nome da rua:", error);
    return null;
  }
}

// Preencher a tabela na inicialização
preencherTabela();
