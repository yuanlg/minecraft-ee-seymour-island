/**
 * An experimental extension for building out an agent world
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace agentExt {
   /**
     * Repair the block below
     */
    //% block="agent repair below"
    //% weight=90
    export function repairBelow() {
        if (agent.inspect(AgentInspection.Block, DOWN) == AIR) {
            agent.place(DOWN)
        } else if (agent.inspect(AgentInspection.Block, DOWN) == MOSS_STONE) {
            agent.destroy(DOWN)
            agent.place(DOWN)
        }
    }

}
