
module.exports = {
    default: {
        paths: ['features/**/*.feature'],

        require: [
            'step_definitions/**/*.ts',
            'support/**/*.ts'
        ],

        requireModule: ['ts-node/register'],

        format: [
            'progress',"html:cucumber_report/cucu.html"
        ],

        timeout: 30000
    }
};
