/**
 * Created with JetBrains WebStorm.
 * User: stewartarmbrecht
 * Date: 8/10/12
 * Time: 10:22 AM
 * To change this template use File | Settings | File Templates.
 */



var indexVM = function() {

    var headerText = "This is a test of the VM.";

    return {
        headerText: headerText
    }
}();

ko.applyBindings(indexVM);
