/**
 * An experimental extension for building out an agent world
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace seymour {
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
   
      /**
     * Places redstone below
     */
    //% block="agent place redstone below"
    //% weight=90
    export function placeRedstoneBelow() {
        agent.place(DOWN)
    }
   
   /**
     * Places one of the available floor blocks below
     */
    //% block="agent place floor below"
    //% weight=90
   export function placeFloor (blockid: number) {
      // 0 - 41 - Gold
      // 1 - 133 - Emerald
      // 2 - 57 - Gold
      // 3 - 22 - Lapis
      // 4 - 152 - Redstone
    if (blockid == 41) {
        agent.setSlot(0)
    } else if (blockid == 133) {
        agent.setSlot(1)
    } else if (blockid == 57) {
        agent.setSlot(2)
    } else if (blockid == 22) {
        agent.setSlot(3)
    } else if (blockid == 152) {
        agent.setSlot(4)
    } else {
        agent.setSlot(26)
    }
    agent.place(DOWN)
}

}
