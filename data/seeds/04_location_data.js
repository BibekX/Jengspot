
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, district: 'Tsuen Wan', address: 'blank', lat: 22.3699, lng: 114.1144},
        {id: 2, district: 'Kowloon Tong', address: 'blank', lat: 22.3369, lng: 114.1763},
        {id: 3, district: 'Sham Shui Po', address: 'blank', lat: 22.3286, lng: 114.1603},
        {id: 4, district: 'Prince Edward', address: 'coffee gem spot', lat: 22.3244, lng: 114.1692},
      ]);
    });
};

// {id: 1, district: 'Tsuen Wan'},
// {id: 2, district: 'Kowloon Tong'},
// {id: 3, district: 'Sham Shui Po'},
// {id: 4, district: 'Prince Edward'},
// {id: 5, district: 'Mong Kok'},
// {id: 6, district: 'Yau Ma Tei'},
// {id: 7, district: 'Jordan'},
// {id: 8, district: 'Tsim Sha Tsui'},
// {id: 9, district: 'Sai Kung'},
// {id: 10, district: 'Tai Wai'},
// {id: 11, district: 'Sha Tin'},
// {id: 12, district: 'Yuen Long'},
// {id: 13, district: 'Kennedy Town'},
// {id: 14, district: 'Sai Ying Pun'},
// {id: 15, district: 'Sheung Wan'},
// {id: 16, district: 'Central'},
// {id: 17, district: 'Admiralty'},
// {id: 18, district: 'Wan Chai'},
// {id: 19, district: 'Causeway Bay'},
// {id: 20, district: 'Tin Hau'},
// {id: 21, district: 'Fortress Hill'},
// {id: 22, district: 'North Point'},
// {id: 23, district: 'Quarry Bay'},
// {id: 24, district: 'Tai Koo'},
// {id: 25, district: 'Sai Wan Ho'},
// {id: 26, district: 'Shau Kei Wan'}