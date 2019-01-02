const Vec3 = require('tera-vec3');

module.exports = function HwRedirect(dispatch) {
	const highwatchRedeem = new Vec3(22205, 4870, 6191);
	const highwatchBanker = new Vec3(22438, 1605, 5857);
	const treehouseBanker = new Vec3(19395, 4335, 6191);

    const command = dispatch.command || dispatch.require.command;
	let enabled = true;
	let tree = true;

	dispatch.hook('S_SPAWN_ME', 3, event => {
		if (enabled &&  dispatch.game.me.zone == 7031 && event.loc.equals(highwatchRedeem)) {
			if(tree){
				event.loc = treehouseBanker;
			} else {
				event.loc = highwatchBanker;
			}
		}
		return true;
	});

	command.add('hw', () => {
		enabled = !enabled;
		command.message(enabled ? 'Highwatch Redirect enabled.' : 'Highwatch Redirect disabled.');
	});
	
	command.add('hwtree', () => {
		tree = !tree;
		command.message(tree ? 'treehouse Redirect enabled.' : 'treehouse Redirect disabled.');
	});

	//this.destructor = function() {
	//	command.remove('hw');
	//};
}
