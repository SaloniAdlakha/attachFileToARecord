({
    handleUploadFinished: function (cmp, event) {
       
        var uploadedFiles = event.getParam("files");
        var showToast = $A.get("e.force:showToast");
        showToast.setParams({
            title : 'Files Upload',
            message : 'Files Uploaded Successfully.',
            type : 'success',
            mode : 'pester'
        });
        showToast.fire();
        $A.get('e.force:refreshView').fire(); 
       
    }
})
