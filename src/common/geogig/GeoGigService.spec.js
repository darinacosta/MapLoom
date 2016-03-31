describe('GeoGigService', function() {
  beforeEach(module('MapLoom'));
  beforeEach(module('loom_geogig_service'));

  beforeEach(inject(function(_geogigService_) {
    geogigService = _geogigService_;
  }));

  describe('getRepoById', function() {

    beforeEach(inject(function() {
      geogigService.addRepo({uuid: 'test-uuid'});
      actualService = geogigService.getRepoById(0);
      expectedService = {uuid: 'test-uuid'};
    }));

    it('should return the repo with a matching ID if found', function(){
      expect(expectedService.uuid).toBe(actualService.uuid);
    })
  });

  describe('addRepo', function() {

    beforeEach(inject(function() {
      geogigService.addRepo({uuid: 'test-uuid'});
      actualService = geogigService.getRepoById(0);
      expectedService = {uuid: 'test-uuid'};
    }));

    it('', function(){
    })
  });

  
  describe('returnOptionsAsQueryString', function() {
    beforeEach(inject(function(_geogigService_) {
      geogigService = _geogigService_;
      
      geogigUrl = 'http://192.168.99.110/geoserver/geogig/892d8209-338b-4b7b-86dd-0232b88a4eb2/remote?output_format=JSON&_dc=1458245854547';
      goegigOptions = {
        ping: true,
        remoteName: "dev"
      }
    }));

    it('should return a valid URL with all options included as queries.', function(){
      var expectedUrl = geogigUrl + '&ping=true&remoteName=dev';
      var actualUrl = geogigService.returnOptionsAsQueryString(geogigUrl, goegigOptions);  

      expect(expectedUrl).toBe(actualUrl);
    })
  });

});