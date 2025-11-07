#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_3A;
layout (binding = 1) uniform sampler2D fp_t_tcb_38;
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform sampler2D fp_t_tcb_34;
layout (location = 0) in vec4 in_attr0;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise vec3 temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise vec3 temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise vec3 temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise vec3 temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    // 0x000008: 0x4C98079406570001 Mov
    // 0x000010: 0xE003FF874FF7FF02 Ipa
    temp_0 = gl_FragCoord.y;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0x4C98079406770004 Mov
    // 0x000028: 0xE003FF870FF7FF03 Ipa
    temp_3 = gl_FragCoord.x;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x4C98079406670006 Mov
    // 0x000038: 0x0103F0000007F000 Mov32i
    // 0x000048: 0x1E23C8EFA3570101 Fmul32i
    temp_6 = fp_c5.data[25].y * 0.0174532924;
    // 0x000050: 0x5C9000000017000A Rro
    // 0x000058: 0x1E23C8EFA3570401 Fmul32i
    temp_7 = fp_c5.data[25].w * 0.0174532924;
    // 0x000068: 0x5080000000070A05 Mufu
    temp_8 = cos(temp_6);
    // 0x000070: 0x1E23C8EFA3570604 Fmul32i
    temp_9 = fp_c5.data[25].z * 0.0174532924;
    // 0x000078: 0x5080000000170A06 Mufu
    temp_10 = sin(temp_6);
    // 0x000088: 0x5C9000000017000C Rro
    // 0x000090: 0x5C9000000047000D Rro
    // 0x000098: 0x5080000000070C01 Mufu
    temp_11 = cos(temp_7);
    // 0x0000A8: 0x49A1010C04970008 Ffma
    temp_12 = 0.0 - fp_c3.data[18].y;
    temp_13 = fma(0.5, temp_12, temp_2);
    // 0x0000B0: 0x5080000000170C02 Mufu
    temp_14 = sin(temp_7);
    // 0x0000B8: 0x49A1018C04870007 Ffma
    temp_15 = 0.0 - fp_c3.data[18].x;
    temp_16 = fma(0.5, temp_15, temp_5);
    // 0x0000C8: 0x5080000000170D03 Mufu
    temp_17 = sin(temp_9);
    // 0x0000D0: 0x5C68100000870509 Fmul
    temp_18 = temp_8 * temp_13;
    // 0x0000D8: 0x5080000000070D04 Mufu
    temp_19 = cos(temp_9);
    // 0x0000E8: 0x5C68100000670808 Fmul
    temp_20 = temp_13 * temp_10;
    // 0x0000F0: 0x508040000047010A Mufu
    temp_21 = abs(temp_11);
    temp_22 = 1.0 / temp_21;
    // 0x0000F8: 0x59A0048000670709 Ffma
    temp_23 = fma(temp_16, temp_10, temp_18);
    // 0x000108: 0x508040000047020B Mufu
    temp_24 = abs(temp_14);
    temp_25 = 1.0 / temp_24;
    // 0x000110: 0x59A2040000770506 Ffma
    temp_26 = 0.0 - temp_20;
    temp_27 = fma(temp_8, temp_16, temp_26);
    // 0x000118: 0x5080400000470305 Mufu
    temp_28 = abs(temp_17);
    temp_29 = 1.0 / temp_28;
    // 0x000128: 0x49A0048C04970008 Ffma
    temp_30 = fma(0.5, fp_c3.data[18].y, temp_23);
    // 0x000130: 0x5080400000470407 Mufu
    temp_31 = abs(temp_19);
    temp_32 = 1.0 / temp_31;
    // 0x000138: 0x49A0030C0487000C Ffma
    temp_33 = fma(0.5, fp_c3.data[18].x, temp_27);
    // 0x000148: 0x0103F8000007F009 Mov32i
    // 0x000150: 0x4C68100C04B70806 Fmul
    temp_34 = temp_30 * fp_c3.data[18].w;
    // 0x000158: 0x4C68100C04A70C0C Fmul
    temp_35 = temp_33 * fp_c3.data[18].z;
    // 0x000168: 0x5C60138000B70A0A Fmnmx
    temp_36 = min(temp_22, temp_25);
    // 0x000170: 0x32A204C000070608 Ffma
    temp_37 = fma(temp_34, 2.0, -1.0);
    // 0x000178: 0x5C6013800077050D Fmnmx
    temp_38 = min(temp_29, temp_32);
    // 0x000188: 0x5080000000470A05 Mufu
    temp_39 = 1.0 / temp_36;
    // 0x000190: 0x4C5810140687060B Fadd
    temp_40 = temp_34 + fp_c5.data[26].x;
    // 0x000198: 0x5080000000470D06 Mufu
    temp_41 = 1.0 / temp_38;
    // 0x0001A8: 0x32A204C000070C07 Ffma
    temp_42 = fma(temp_35, 2.0, -1.0);
    // 0x0001B0: 0x5C68100000370809 Fmul
    temp_43 = temp_37 * temp_17;
    // 0x0001B8: 0x5C68100000270802 Fmul
    temp_44 = temp_37 * temp_14;
    // 0x0001C8: 0x4C58101406970B0B Fadd
    temp_45 = temp_40 + fp_c5.data[26].y;
    // 0x0001D0: 0x59A0048000470709 Ffma
    temp_46 = fma(temp_42, temp_19, temp_43);
    // 0x0001D8: 0x59A0010000770102 Ffma
    temp_47 = fma(temp_11, temp_42, temp_44);
    // 0x0001E8: 0x3958103F00070B01 Fadd
    temp_48 = temp_45 + -0.5;
    // 0x0001F0: 0x5C68100000670906 Fmul
    temp_49 = temp_46 * temp_41;
    // 0x0001F8: 0x5C68100000570202 Fmul
    temp_50 = temp_47 * temp_39;
    // 0x000208: 0x5C9807800FF70009 Mov
    // 0x000210: 0x5C9807800FF70005 Mov
    // 0x000218: 0x49A0001406470101 Ffma
    temp_51 = fma(temp_48, fp_c5.data[25].x, 0.5);
    // 0x000228: 0x32A0003F00070608 Ffma
    temp_52 = fma(temp_49, 0.5, 0.5);
    // 0x000230: 0x32A0003F00070207 Ffma
    temp_53 = fma(temp_50, 0.5, 0.5);
    // 0x000238: 0x5C9807800FF70006 Mov
    // 0x000248: 0x5C9807800FF70002 Mov
    // 0x000250: 0xD82203A0F0670706 Texs
    temp_54 = texture(fp_t_tcb_3A, vec2(temp_53, 0.0)).xyz;
    temp_55 = temp_54.x;
    temp_56 = temp_54.y;
    temp_57 = temp_54.z;
    // 0x000258: 0xD8220380E0970808 Texs
    temp_58 = texture(fp_t_tcb_38, vec2(temp_52, 0.0)).xyz;
    temp_59 = temp_58.x;
    temp_60 = temp_58.y;
    temp_61 = temp_58.z;
    // 0x000268: 0xD8220360C0570C04 Texs
    temp_62 = texture(fp_t_tcb_36, vec2(temp_35, 0.0)).xyz;
    temp_63 = temp_62.x;
    temp_64 = temp_62.y;
    temp_65 = temp_62.z;
    // 0x000270: 0xD82203401027010A Texs
    temp_66 = texture(fp_t_tcb_34, vec2(temp_51, 0.0)).xyz;
    temp_67 = temp_66.x;
    temp_68 = temp_66.y;
    temp_69 = temp_66.z;
    // 0x000278: 0xE003FF87CFF7FF03 Ipa
    // 0x000288: 0x5080000000470303 Mufu
    // 0x000290: 0xE043FF888037FF0D Ipa
    temp_70 = in_attr0.z;
    // 0x000298: 0x4C58100C03870D0D Fadd
    temp_71 = temp_70 + fp_c3.data[14].x;
    // 0x0002A8: 0x5C58100000870600 Fadd
    temp_72 = temp_55 + temp_59;
    // 0x0002B0: 0x5C58100000970703 Fadd
    temp_73 = temp_56 + temp_60;
    // 0x0002B8: 0x5C58100000A7040A Fadd
    temp_74 = temp_63 + temp_67;
    // 0x0002C8: 0x5C58100000B70505 Fadd
    temp_75 = temp_64 + temp_68;
    // 0x0002D0: 0x5C58100000E70F04 Fadd
    temp_76 = temp_57 + temp_61;
    // 0x0002D8: 0x5C58100000170C06 Fadd
    temp_77 = temp_65 + temp_69;
    // 0x0002E8: 0x0103F8000007F007 Mov32i
    // 0x0002F0: 0x5C58100000A70000 Fadd
    temp_78 = temp_72 + temp_74;
    // 0x0002F8: 0x5C58100000570301 Fadd
    temp_79 = temp_73 + temp_75;
    // 0x000308: 0x0103F8000007F003 Mov32i
    // 0x000310: 0x5C58100000670402 Fadd
    temp_80 = temp_76 + temp_77;
    // 0x000318: 0x0103F6000007F005 Mov32i
    // 0x000328: 0x5C9807800FF70006 Mov
    // 0x000330: 0x49A37F8C03C70D04 Ffma
    temp_81 = 0.0 - fp_c3.data[15].x;
    temp_82 = fma(temp_71, temp_81, -0.0);
    // 0x000338: 0xE30000000007000F Exit
    out_attr0.x = temp_78;
    out_attr0.y = temp_79;
    out_attr0.z = temp_80;
    out_attr0.w = 1.0;
    out_attr1.x = temp_82;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
